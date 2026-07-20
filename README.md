# @pipe2-ai/sdk

Official TypeScript SDK for [Pipe2.ai](https://pipe2.ai) — run AI media
pipelines (video generation, image generation, text-to-speech, video reframing)
and track their results.

Fully typed, with real-time subscriptions over WebSocket.

## Install

```bash
npm install @pipe2-ai/sdk
# or: bun add @pipe2-ai/sdk
```

## Authenticate

`createClient` takes a bearer token — a personal access token from your
[Pipe2.ai account](https://pipe2.ai), or a user JWT.

```ts
import { createClient, type Pipe2SDK } from '@pipe2-ai/sdk';

const client = createClient(process.env.PIPE2_TOKEN!);
```

It defaults to the production endpoint `https://api.pipe2.ai/v1/graphql`. Pass a
second argument to point elsewhere, and a third to override the WebSocket URL
used for subscriptions.

## Run a pipeline

Pipeline inputs vary per pipeline, so they are passed as JSON. Browse the
catalog and each pipeline's inputs at [pipe2.ai](https://pipe2.ai).

```ts
const { run_pipeline } = await client.RunPipeline({
  pipeline_slug: 'video-generator',
  input: { prompt: 'a red fox in falling snow, cinematic' },
});

console.log('run:', run_pipeline?.run_id);

// Runs are asynchronous — fetch the current status by run id, and repeat
// until it reaches a terminal state.
const { pipeline_runs_by_pk } = await client.GetPipelineRun({
  id: run_pipeline!.run_id,
});
console.log('status:', pipeline_runs_by_pk?.status);
```

## Estimate cost before running

Runs are billed in credits. `EstimatePipelineCost` returns the price for a given
pipeline and input without starting anything.

```ts
const estimate = await client.EstimatePipelineCost({
  pipeline_slug: 'video-generator',
  input: { prompt: 'a red fox in falling snow' },
});
```

## Browse pipelines

```ts
const { pipelines } = await client.GetPipelines();
```

## Related

- [Pipe2.ai](https://pipe2.ai) — pipeline catalog, pricing, and docs
- [pipe2-cli](https://github.com/pipe2-ai/pipe2-cli) — agent-native command line tool
- [sdk-go](https://github.com/pipe2-ai/sdk-go) — Go client

## License

Apache-2.0
