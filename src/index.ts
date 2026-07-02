import { GraphQLClient } from 'graphql-request';
import { createClient as createWsClient, type Client as WsClient } from 'graphql-ws';
import { print, type DocumentNode } from 'graphql';
import { getSdk, type Requester } from '../generated/sdk.js';

export type Pipe2SDK = ReturnType<typeof getSdk>;

/**
 * Create a Pipe2.ai SDK client with full support for queries, mutations,
 * and real-time WebSocket subscriptions.
 */
export function createClient(
  token: string,
  endpoint = 'https://api.pipe2.ai/v1/graphql',
  wsEndpoint?: string,
): Pipe2SDK {
  const headers: Record<string, string> = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // HTTP client for queries and mutations
  const httpClient = new GraphQLClient(endpoint, { headers });

  // WebSocket client for subscriptions (lazy — connects on first subscription).
  // wsEndpoint overrides the derived URL — needed in dev because Astro's
  // dev-server doesn't proxy WS upgrades through Vite, so subscriptions must
  // bypass the same-origin proxy and dial Hasura directly.
  const wsEndpointResolved = wsEndpoint || endpoint.replace(/^http/, 'ws');
  let wsClient: WsClient | null = null;
  const getWsClient = () => {
    if (!wsClient) {
      wsClient = createWsClient({
        url: wsEndpointResolved,
        connectionParams: { headers },
        // Browsers have native WebSocket; only Node.js needs the 'ws' polyfill.
        // graphql-ws uses globalThis.WebSocket by default when webSocketImpl is omitted.
      });
    }
    return wsClient;
  };

  const requester: Requester = <R, V>(doc: DocumentNode, vars?: V): Promise<R> | AsyncIterable<R> => {
    const query = print(doc);
    const isSubscription = doc.definitions.some(
      (d) => d.kind === 'OperationDefinition' && d.operation === 'subscription'
    );

    if (isSubscription) {
      // Return an async iterable for subscriptions
      const ws = getWsClient();
      return (async function* () {
        const iterator = ws.iterate<R>({ query, variables: vars as Record<string, unknown> });
        for await (const result of iterator) {
          if (result.data) yield result.data;
        }
      })() as AsyncIterable<R>;
    }

    // Regular HTTP request for queries and mutations
    return httpClient.request<R>({ document: doc, variables: vars as Record<string, unknown> });
  };

  return getSdk(requester);
}

export * from '../generated/sdk.js';
