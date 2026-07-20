import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  bpchar: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type Abort_Multipart_Upload_Output = {
  __typename?: 'abort_multipart_upload_output';
  success: Scalars['Boolean']['output'];
};

export type Add_Affiliate_Code_Output = {
  __typename?: 'add_affiliate_code_output';
  code_id: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** columns and relationships of "affiliate_codes" */
export type Affiliate_Codes = {
  __typename?: 'affiliate_codes';
  /** An object relationship */
  affiliate: Affiliates;
  affiliate_id: Scalars['uuid']['output'];
  code: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  is_primary?: Maybe<Scalars['Boolean']['output']>;
  redirect_path?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "affiliate_codes" */
export type Affiliate_Codes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Affiliate_Codes_Max_Order_By>;
  min?: InputMaybe<Affiliate_Codes_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "affiliate_codes". All fields are combined with a logical 'AND'. */
export type Affiliate_Codes_Bool_Exp = {
  _and?: InputMaybe<Array<Affiliate_Codes_Bool_Exp>>;
  _not?: InputMaybe<Affiliate_Codes_Bool_Exp>;
  _or?: InputMaybe<Array<Affiliate_Codes_Bool_Exp>>;
  affiliate?: InputMaybe<Affiliates_Bool_Exp>;
  affiliate_id?: InputMaybe<Uuid_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_primary?: InputMaybe<Boolean_Comparison_Exp>;
  redirect_path?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "affiliate_codes" */
export type Affiliate_Codes_Max_Order_By = {
  affiliate_id?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  redirect_path?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "affiliate_codes" */
export type Affiliate_Codes_Min_Order_By = {
  affiliate_id?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  redirect_path?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "affiliate_codes" */
export type Affiliate_Codes_Mutation_Response = {
  __typename?: 'affiliate_codes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Affiliate_Codes>;
};

/** Ordering options when selecting data from "affiliate_codes". */
export type Affiliate_Codes_Order_By = {
  affiliate?: InputMaybe<Affiliates_Order_By>;
  affiliate_id?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_primary?: InputMaybe<Order_By>;
  redirect_path?: InputMaybe<Order_By>;
};

/** primary key columns input for table: affiliate_codes */
export type Affiliate_Codes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "affiliate_codes" */
export enum Affiliate_Codes_Select_Column {
  /** column name */
  AffiliateId = 'affiliate_id',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPrimary = 'is_primary',
  /** column name */
  RedirectPath = 'redirect_path'
}

/** input type for updating data in table "affiliate_codes" */
export type Affiliate_Codes_Set_Input = {
  redirect_path?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "affiliate_codes" */
export type Affiliate_Codes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Affiliate_Codes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Affiliate_Codes_Stream_Cursor_Value_Input = {
  affiliate_id?: InputMaybe<Scalars['uuid']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  redirect_path?: InputMaybe<Scalars['String']['input']>;
};

export type Affiliate_Codes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Affiliate_Codes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Affiliate_Codes_Bool_Exp;
};

/** columns and relationships of "affiliates" */
export type Affiliates = {
  __typename?: 'affiliates';
  /** An array relationship */
  codes: Array<Affiliate_Codes>;
  commission_percent?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  whop_affiliate_id?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "affiliates" */
export type AffiliatesCodesArgs = {
  distinct_on?: InputMaybe<Array<Affiliate_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Affiliate_Codes_Order_By>>;
  where?: InputMaybe<Affiliate_Codes_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "affiliates". All fields are combined with a logical 'AND'. */
export type Affiliates_Bool_Exp = {
  _and?: InputMaybe<Array<Affiliates_Bool_Exp>>;
  _not?: InputMaybe<Affiliates_Bool_Exp>;
  _or?: InputMaybe<Array<Affiliates_Bool_Exp>>;
  codes?: InputMaybe<Affiliate_Codes_Bool_Exp>;
  commission_percent?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  whop_affiliate_id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "affiliates". */
export type Affiliates_Order_By = {
  codes_aggregate?: InputMaybe<Affiliate_Codes_Aggregate_Order_By>;
  commission_percent?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  whop_affiliate_id?: InputMaybe<Order_By>;
};

/** select columns of table "affiliates" */
export enum Affiliates_Select_Column {
  /** column name */
  CommissionPercent = 'commission_percent',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  WhopAffiliateId = 'whop_affiliate_id'
}

/** Streaming cursor of the table "affiliates" */
export type Affiliates_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Affiliates_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Affiliates_Stream_Cursor_Value_Input = {
  commission_percent?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  whop_affiliate_id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "assets" */
export type Assets = {
  __typename?: 'assets';
  created_at: Scalars['timestamptz']['output'];
  duration_sec?: Maybe<Scalars['numeric']['output']>;
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  /** An object relationship */
  pipeline_run?: Maybe<Pipeline_Runs>;
  pipeline_run_id?: Maybe<Scalars['uuid']['output']>;
  preview_frames?: Maybe<Array<Scalars['String']['output']>>;
  size_bytes: Scalars['bigint']['output'];
  tags: Array<Scalars['String']['output']>;
  thumbnail_url?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};


/** columns and relationships of "assets" */
export type AssetsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "assets" */
export type Assets_Aggregate = {
  __typename?: 'assets_aggregate';
  aggregate?: Maybe<Assets_Aggregate_Fields>;
  nodes: Array<Assets>;
};

export type Assets_Aggregate_Bool_Exp = {
  count?: InputMaybe<Assets_Aggregate_Bool_Exp_Count>;
};

export type Assets_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Assets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Assets_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "assets" */
export type Assets_Aggregate_Fields = {
  __typename?: 'assets_aggregate_fields';
  avg?: Maybe<Assets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Assets_Max_Fields>;
  min?: Maybe<Assets_Min_Fields>;
  stddev?: Maybe<Assets_Stddev_Fields>;
  stddev_pop?: Maybe<Assets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Assets_Stddev_Samp_Fields>;
  sum?: Maybe<Assets_Sum_Fields>;
  var_pop?: Maybe<Assets_Var_Pop_Fields>;
  var_samp?: Maybe<Assets_Var_Samp_Fields>;
  variance?: Maybe<Assets_Variance_Fields>;
};


/** aggregate fields of "assets" */
export type Assets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Assets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "assets" */
export type Assets_Aggregate_Order_By = {
  avg?: InputMaybe<Assets_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Assets_Max_Order_By>;
  min?: InputMaybe<Assets_Min_Order_By>;
  stddev?: InputMaybe<Assets_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Assets_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Assets_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Assets_Sum_Order_By>;
  var_pop?: InputMaybe<Assets_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Assets_Var_Samp_Order_By>;
  variance?: InputMaybe<Assets_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Assets_Avg_Fields = {
  __typename?: 'assets_avg_fields';
  duration_sec?: Maybe<Scalars['Float']['output']>;
  size_bytes?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "assets" */
export type Assets_Avg_Order_By = {
  duration_sec?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "assets". All fields are combined with a logical 'AND'. */
export type Assets_Bool_Exp = {
  _and?: InputMaybe<Array<Assets_Bool_Exp>>;
  _not?: InputMaybe<Assets_Bool_Exp>;
  _or?: InputMaybe<Array<Assets_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  duration_sec?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  pipeline_run?: InputMaybe<Pipeline_Runs_Bool_Exp>;
  pipeline_run_id?: InputMaybe<Uuid_Comparison_Exp>;
  preview_frames?: InputMaybe<String_Array_Comparison_Exp>;
  size_bytes?: InputMaybe<Bigint_Comparison_Exp>;
  tags?: InputMaybe<String_Array_Comparison_Exp>;
  thumbnail_url?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Assets_Max_Fields = {
  __typename?: 'assets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  duration_sec?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  pipeline_run_id?: Maybe<Scalars['uuid']['output']>;
  preview_frames?: Maybe<Array<Scalars['String']['output']>>;
  size_bytes?: Maybe<Scalars['bigint']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  thumbnail_url?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "assets" */
export type Assets_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  duration_sec?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pipeline_run_id?: InputMaybe<Order_By>;
  preview_frames?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Assets_Min_Fields = {
  __typename?: 'assets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  duration_sec?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  pipeline_run_id?: Maybe<Scalars['uuid']['output']>;
  preview_frames?: Maybe<Array<Scalars['String']['output']>>;
  size_bytes?: Maybe<Scalars['bigint']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  thumbnail_url?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "assets" */
export type Assets_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  duration_sec?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pipeline_run_id?: InputMaybe<Order_By>;
  preview_frames?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "assets" */
export type Assets_Mutation_Response = {
  __typename?: 'assets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Assets>;
};

/** Ordering options when selecting data from "assets". */
export type Assets_Order_By = {
  created_at?: InputMaybe<Order_By>;
  duration_sec?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  pipeline_run?: InputMaybe<Pipeline_Runs_Order_By>;
  pipeline_run_id?: InputMaybe<Order_By>;
  preview_frames?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: assets */
export type Assets_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "assets" */
export enum Assets_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DurationSec = 'duration_sec',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  PipelineRunId = 'pipeline_run_id',
  /** column name */
  PreviewFrames = 'preview_frames',
  /** column name */
  SizeBytes = 'size_bytes',
  /** column name */
  Tags = 'tags',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Type = 'type',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "assets" */
export type Assets_Set_Input = {
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** aggregate stddev on columns */
export type Assets_Stddev_Fields = {
  __typename?: 'assets_stddev_fields';
  duration_sec?: Maybe<Scalars['Float']['output']>;
  size_bytes?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "assets" */
export type Assets_Stddev_Order_By = {
  duration_sec?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Assets_Stddev_Pop_Fields = {
  __typename?: 'assets_stddev_pop_fields';
  duration_sec?: Maybe<Scalars['Float']['output']>;
  size_bytes?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "assets" */
export type Assets_Stddev_Pop_Order_By = {
  duration_sec?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Assets_Stddev_Samp_Fields = {
  __typename?: 'assets_stddev_samp_fields';
  duration_sec?: Maybe<Scalars['Float']['output']>;
  size_bytes?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "assets" */
export type Assets_Stddev_Samp_Order_By = {
  duration_sec?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "assets" */
export type Assets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Assets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Assets_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  duration_sec?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  pipeline_run_id?: InputMaybe<Scalars['uuid']['input']>;
  preview_frames?: InputMaybe<Array<Scalars['String']['input']>>;
  size_bytes?: InputMaybe<Scalars['bigint']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Assets_Sum_Fields = {
  __typename?: 'assets_sum_fields';
  duration_sec?: Maybe<Scalars['numeric']['output']>;
  size_bytes?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "assets" */
export type Assets_Sum_Order_By = {
  duration_sec?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
};

export type Assets_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Assets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Assets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Assets_Var_Pop_Fields = {
  __typename?: 'assets_var_pop_fields';
  duration_sec?: Maybe<Scalars['Float']['output']>;
  size_bytes?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "assets" */
export type Assets_Var_Pop_Order_By = {
  duration_sec?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Assets_Var_Samp_Fields = {
  __typename?: 'assets_var_samp_fields';
  duration_sec?: Maybe<Scalars['Float']['output']>;
  size_bytes?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "assets" */
export type Assets_Var_Samp_Order_By = {
  duration_sec?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Assets_Variance_Fields = {
  __typename?: 'assets_variance_fields';
  duration_sec?: Maybe<Scalars['Float']['output']>;
  size_bytes?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "assets" */
export type Assets_Variance_Order_By = {
  duration_sec?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
};

export type Auth_Flow = {
  __typename?: 'auth_flow';
  csrf_token: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type Auth_Result = {
  __typename?: 'auth_result';
  affiliate_id?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

export type Cancel_Account_Deletion_Output = {
  __typename?: 'cancel_account_deletion_output';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Cancel_Pipeline_Run_Output = {
  __typename?: 'cancel_pipeline_run_output';
  success: Scalars['Boolean']['output'];
};

export type Cancel_Subscription_Output = {
  __typename?: 'cancel_subscription_output';
  cancel_at_period_end: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Change_Avatar_Output = {
  __typename?: 'change_avatar_output';
  avatar_url: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Change_Name_Output = {
  __typename?: 'change_name_output';
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Change_Password_Output = {
  __typename?: 'change_password_output';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Confirm_Account_Deletion_Output = {
  __typename?: 'confirm_account_deletion_output';
  effective_at: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Create_Asset_Output = {
  __typename?: 'create_asset_output';
  created_at: Scalars['String']['output'];
  id: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Create_Checkout_Session_Output = {
  __typename?: 'create_checkout_session_output';
  success: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};

export type Create_Personal_Access_Token_Output = {
  __typename?: 'create_personal_access_token_output';
  expires_at: Scalars['String']['output'];
  id: Scalars['String']['output'];
  jti: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token: Scalars['String']['output'];
};

export type Credit_Balance_Output = {
  __typename?: 'credit_balance_output';
  available: Scalars['Int']['output'];
  balance: Scalars['Int']['output'];
  reserved: Scalars['Int']['output'];
};

export type Credit_History_Entry = {
  __typename?: 'credit_history_entry';
  amount: Scalars['Int']['output'];
  created_at: Scalars['String']['output'];
  description: Scalars['String']['output'];
  pipeline_name?: Maybe<Scalars['String']['output']>;
  pipeline_run_id?: Maybe<Scalars['String']['output']>;
  pipeline_slug?: Maybe<Scalars['String']['output']>;
  reservation_mc?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

/** columns and relationships of "credit_pack_translations" */
export type Credit_Pack_Translations = {
  __typename?: 'credit_pack_translations';
  credit_pack_id: Scalars['uuid']['output'];
  locale: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** order by aggregate values of table "credit_pack_translations" */
export type Credit_Pack_Translations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Credit_Pack_Translations_Max_Order_By>;
  min?: InputMaybe<Credit_Pack_Translations_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "credit_pack_translations". All fields are combined with a logical 'AND'. */
export type Credit_Pack_Translations_Bool_Exp = {
  _and?: InputMaybe<Array<Credit_Pack_Translations_Bool_Exp>>;
  _not?: InputMaybe<Credit_Pack_Translations_Bool_Exp>;
  _or?: InputMaybe<Array<Credit_Pack_Translations_Bool_Exp>>;
  credit_pack_id?: InputMaybe<Uuid_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "credit_pack_translations" */
export type Credit_Pack_Translations_Max_Order_By = {
  credit_pack_id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "credit_pack_translations" */
export type Credit_Pack_Translations_Min_Order_By = {
  credit_pack_id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "credit_pack_translations". */
export type Credit_Pack_Translations_Order_By = {
  credit_pack_id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "credit_pack_translations" */
export enum Credit_Pack_Translations_Select_Column {
  /** column name */
  CreditPackId = 'credit_pack_id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "credit_pack_translations" */
export type Credit_Pack_Translations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Credit_Pack_Translations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Credit_Pack_Translations_Stream_Cursor_Value_Input = {
  credit_pack_id?: InputMaybe<Scalars['uuid']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "credit_pack_versions" */
export type Credit_Pack_Versions = {
  __typename?: 'credit_pack_versions';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  credit_pack: Credit_Packs;
  credit_pack_id: Scalars['uuid']['output'];
  credits: Scalars['Int']['output'];
  deprecated_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  is_current: Scalars['Boolean']['output'];
  price_cents: Scalars['Int']['output'];
  version: Scalars['Int']['output'];
  whop_plan_id?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "credit_pack_versions" */
export type Credit_Pack_Versions_Aggregate_Order_By = {
  avg?: InputMaybe<Credit_Pack_Versions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Credit_Pack_Versions_Max_Order_By>;
  min?: InputMaybe<Credit_Pack_Versions_Min_Order_By>;
  stddev?: InputMaybe<Credit_Pack_Versions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Credit_Pack_Versions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Credit_Pack_Versions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Credit_Pack_Versions_Sum_Order_By>;
  var_pop?: InputMaybe<Credit_Pack_Versions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Credit_Pack_Versions_Var_Samp_Order_By>;
  variance?: InputMaybe<Credit_Pack_Versions_Variance_Order_By>;
};

/** order by avg() on columns of table "credit_pack_versions" */
export type Credit_Pack_Versions_Avg_Order_By = {
  credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "credit_pack_versions". All fields are combined with a logical 'AND'. */
export type Credit_Pack_Versions_Bool_Exp = {
  _and?: InputMaybe<Array<Credit_Pack_Versions_Bool_Exp>>;
  _not?: InputMaybe<Credit_Pack_Versions_Bool_Exp>;
  _or?: InputMaybe<Array<Credit_Pack_Versions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_pack?: InputMaybe<Credit_Packs_Bool_Exp>;
  credit_pack_id?: InputMaybe<Uuid_Comparison_Exp>;
  credits?: InputMaybe<Int_Comparison_Exp>;
  deprecated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_current?: InputMaybe<Boolean_Comparison_Exp>;
  price_cents?: InputMaybe<Int_Comparison_Exp>;
  version?: InputMaybe<Int_Comparison_Exp>;
  whop_plan_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "credit_pack_versions" */
export type Credit_Pack_Versions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  credit_pack_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  deprecated_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  whop_plan_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "credit_pack_versions" */
export type Credit_Pack_Versions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  credit_pack_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  deprecated_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  whop_plan_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "credit_pack_versions". */
export type Credit_Pack_Versions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  credit_pack?: InputMaybe<Credit_Packs_Order_By>;
  credit_pack_id?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  deprecated_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_current?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  whop_plan_id?: InputMaybe<Order_By>;
};

/** select columns of table "credit_pack_versions" */
export enum Credit_Pack_Versions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditPackId = 'credit_pack_id',
  /** column name */
  Credits = 'credits',
  /** column name */
  DeprecatedAt = 'deprecated_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCurrent = 'is_current',
  /** column name */
  PriceCents = 'price_cents',
  /** column name */
  Version = 'version',
  /** column name */
  WhopPlanId = 'whop_plan_id'
}

/** order by stddev() on columns of table "credit_pack_versions" */
export type Credit_Pack_Versions_Stddev_Order_By = {
  credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "credit_pack_versions" */
export type Credit_Pack_Versions_Stddev_Pop_Order_By = {
  credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "credit_pack_versions" */
export type Credit_Pack_Versions_Stddev_Samp_Order_By = {
  credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "credit_pack_versions" */
export type Credit_Pack_Versions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Credit_Pack_Versions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Credit_Pack_Versions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credit_pack_id?: InputMaybe<Scalars['uuid']['input']>;
  credits?: InputMaybe<Scalars['Int']['input']>;
  deprecated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_current?: InputMaybe<Scalars['Boolean']['input']>;
  price_cents?: InputMaybe<Scalars['Int']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  whop_plan_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "credit_pack_versions" */
export type Credit_Pack_Versions_Sum_Order_By = {
  credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "credit_pack_versions" */
export type Credit_Pack_Versions_Var_Pop_Order_By = {
  credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "credit_pack_versions" */
export type Credit_Pack_Versions_Var_Samp_Order_By = {
  credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "credit_pack_versions" */
export type Credit_Pack_Versions_Variance_Order_By = {
  credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** columns and relationships of "credit_packs" */
export type Credit_Packs = {
  __typename?: 'credit_packs';
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  sort_order: Scalars['Int']['output'];
  /** An array relationship */
  translations: Array<Credit_Pack_Translations>;
  /** An array relationship */
  versions: Array<Credit_Pack_Versions>;
};


/** columns and relationships of "credit_packs" */
export type Credit_PacksTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Credit_Pack_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Pack_Translations_Order_By>>;
  where?: InputMaybe<Credit_Pack_Translations_Bool_Exp>;
};


/** columns and relationships of "credit_packs" */
export type Credit_PacksVersionsArgs = {
  distinct_on?: InputMaybe<Array<Credit_Pack_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Pack_Versions_Order_By>>;
  where?: InputMaybe<Credit_Pack_Versions_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "credit_packs". All fields are combined with a logical 'AND'. */
export type Credit_Packs_Bool_Exp = {
  _and?: InputMaybe<Array<Credit_Packs_Bool_Exp>>;
  _not?: InputMaybe<Credit_Packs_Bool_Exp>;
  _or?: InputMaybe<Array<Credit_Packs_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  sort_order?: InputMaybe<Int_Comparison_Exp>;
  translations?: InputMaybe<Credit_Pack_Translations_Bool_Exp>;
  versions?: InputMaybe<Credit_Pack_Versions_Bool_Exp>;
};

/** Ordering options when selecting data from "credit_packs". */
export type Credit_Packs_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Credit_Pack_Translations_Aggregate_Order_By>;
  versions_aggregate?: InputMaybe<Credit_Pack_Versions_Aggregate_Order_By>;
};

/** select columns of table "credit_packs" */
export enum Credit_Packs_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  SortOrder = 'sort_order'
}

/** Streaming cursor of the table "credit_packs" */
export type Credit_Packs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Credit_Packs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Credit_Packs_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
};

export type Current_User_Output = {
  __typename?: 'current_user_output';
  avatar_url?: Maybe<Scalars['String']['output']>;
  deletion_effective_at?: Maybe<Scalars['String']['output']>;
  deletion_scheduled_at?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  email_verified: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Delete_Asset_Output = {
  __typename?: 'delete_asset_output';
  success: Scalars['Boolean']['output'];
};

export type Ensure_Affiliate_Output = {
  __typename?: 'ensure_affiliate_output';
  affiliate_id: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Estimate_Pipeline_Cost_Output = {
  __typename?: 'estimate_pipeline_cost_output';
  engine_caps?: Maybe<Scalars['jsonb']['output']>;
  estimated_mc: Scalars['Int']['output'];
  incompatible_models?: Maybe<Scalars['jsonb']['output']>;
  is_metered: Scalars['Boolean']['output'];
  pipeline_slug: Scalars['String']['output'];
  reservation_mc: Scalars['Int']['output'];
  routed_model?: Maybe<Scalars['String']['output']>;
  routed_reason_code?: Maybe<Scalars['String']['output']>;
  routed_reason_params?: Maybe<Scalars['jsonb']['output']>;
};

/** columns and relationships of "executions_visibility" */
export type Executions_Visibility = {
  __typename?: 'executions_visibility';
  close_time?: Maybe<Scalars['timestamp']['output']>;
  run_id: Scalars['bpchar']['output'];
  start_time: Scalars['timestamp']['output'];
  status: Scalars['Int']['output'];
  task_queue: Scalars['String']['output'];
  workflow_id: Scalars['String']['output'];
  workflow_type_name: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "executions_visibility". All fields are combined with a logical 'AND'. */
export type Executions_Visibility_Bool_Exp = {
  _and?: InputMaybe<Array<Executions_Visibility_Bool_Exp>>;
  _not?: InputMaybe<Executions_Visibility_Bool_Exp>;
  _or?: InputMaybe<Array<Executions_Visibility_Bool_Exp>>;
  close_time?: InputMaybe<Timestamp_Comparison_Exp>;
  run_id?: InputMaybe<Bpchar_Comparison_Exp>;
  start_time?: InputMaybe<Timestamp_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  task_queue?: InputMaybe<String_Comparison_Exp>;
  workflow_id?: InputMaybe<String_Comparison_Exp>;
  workflow_type_name?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "executions_visibility". */
export type Executions_Visibility_Order_By = {
  close_time?: InputMaybe<Order_By>;
  run_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  task_queue?: InputMaybe<Order_By>;
  workflow_id?: InputMaybe<Order_By>;
  workflow_type_name?: InputMaybe<Order_By>;
};

/** select columns of table "executions_visibility" */
export enum Executions_Visibility_Select_Column {
  /** column name */
  CloseTime = 'close_time',
  /** column name */
  RunId = 'run_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Status = 'status',
  /** column name */
  TaskQueue = 'task_queue',
  /** column name */
  WorkflowId = 'workflow_id',
  /** column name */
  WorkflowTypeName = 'workflow_type_name'
}

/** Streaming cursor of the table "executions_visibility" */
export type Executions_Visibility_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Executions_Visibility_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Executions_Visibility_Stream_Cursor_Value_Input = {
  close_time?: InputMaybe<Scalars['timestamp']['input']>;
  run_id?: InputMaybe<Scalars['bpchar']['input']>;
  start_time?: InputMaybe<Scalars['timestamp']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  task_queue?: InputMaybe<Scalars['String']['input']>;
  workflow_id?: InputMaybe<Scalars['String']['input']>;
  workflow_type_name?: InputMaybe<Scalars['String']['input']>;
};

export type Get_My_Referrals_Output = {
  __typename?: 'get_my_referrals_output';
  active_referrals: Scalars['Int']['output'];
  referrals: Array<Referral_Entry>;
  total_commission_cents: Scalars['Int']['output'];
  total_referrals: Scalars['Int']['output'];
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "locales" */
export type Locales = {
  __typename?: 'locales';
  code: Scalars['String']['output'];
  dir: Scalars['String']['output'];
  label: Scalars['String']['output'];
  native_name: Scalars['String']['output'];
  sort_order: Scalars['Int']['output'];
};

/** Boolean expression to filter rows from the table "locales". All fields are combined with a logical 'AND'. */
export type Locales_Bool_Exp = {
  _and?: InputMaybe<Array<Locales_Bool_Exp>>;
  _not?: InputMaybe<Locales_Bool_Exp>;
  _or?: InputMaybe<Array<Locales_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  dir?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  native_name?: InputMaybe<String_Comparison_Exp>;
  sort_order?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "locales". */
export type Locales_Order_By = {
  code?: InputMaybe<Order_By>;
  dir?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  native_name?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** select columns of table "locales" */
export enum Locales_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Dir = 'dir',
  /** column name */
  Label = 'label',
  /** column name */
  NativeName = 'native_name',
  /** column name */
  SortOrder = 'sort_order'
}

/** Streaming cursor of the table "locales" */
export type Locales_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Locales_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Locales_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  dir?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  native_name?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
};

export type Logout_Output = {
  __typename?: 'logout_output';
  success: Scalars['Boolean']['output'];
};

/** columns and relationships of "model_capabilities" */
export type Model_Capabilities = {
  __typename?: 'model_capabilities';
  capability_slug: Scalars['String']['output'];
  /** An object relationship */
  model: Models;
  model_slug: Scalars['String']['output'];
};

/** order by aggregate values of table "model_capabilities" */
export type Model_Capabilities_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Model_Capabilities_Max_Order_By>;
  min?: InputMaybe<Model_Capabilities_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "model_capabilities". All fields are combined with a logical 'AND'. */
export type Model_Capabilities_Bool_Exp = {
  _and?: InputMaybe<Array<Model_Capabilities_Bool_Exp>>;
  _not?: InputMaybe<Model_Capabilities_Bool_Exp>;
  _or?: InputMaybe<Array<Model_Capabilities_Bool_Exp>>;
  capability_slug?: InputMaybe<String_Comparison_Exp>;
  model?: InputMaybe<Models_Bool_Exp>;
  model_slug?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "model_capabilities" */
export type Model_Capabilities_Max_Order_By = {
  capability_slug?: InputMaybe<Order_By>;
  model_slug?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "model_capabilities" */
export type Model_Capabilities_Min_Order_By = {
  capability_slug?: InputMaybe<Order_By>;
  model_slug?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "model_capabilities". */
export type Model_Capabilities_Order_By = {
  capability_slug?: InputMaybe<Order_By>;
  model?: InputMaybe<Models_Order_By>;
  model_slug?: InputMaybe<Order_By>;
};

/** select columns of table "model_capabilities" */
export enum Model_Capabilities_Select_Column {
  /** column name */
  CapabilitySlug = 'capability_slug',
  /** column name */
  ModelSlug = 'model_slug'
}

/** Streaming cursor of the table "model_capabilities" */
export type Model_Capabilities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Model_Capabilities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Model_Capabilities_Stream_Cursor_Value_Input = {
  capability_slug?: InputMaybe<Scalars['String']['input']>;
  model_slug?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "model_translations" */
export type Model_Translations = {
  __typename?: 'model_translations';
  description?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  long_description?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  model: Models;
  model_slug: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** order by aggregate values of table "model_translations" */
export type Model_Translations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Model_Translations_Max_Order_By>;
  min?: InputMaybe<Model_Translations_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "model_translations". All fields are combined with a logical 'AND'. */
export type Model_Translations_Bool_Exp = {
  _and?: InputMaybe<Array<Model_Translations_Bool_Exp>>;
  _not?: InputMaybe<Model_Translations_Bool_Exp>;
  _or?: InputMaybe<Array<Model_Translations_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  long_description?: InputMaybe<String_Comparison_Exp>;
  model?: InputMaybe<Models_Bool_Exp>;
  model_slug?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "model_translations" */
export type Model_Translations_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  long_description?: InputMaybe<Order_By>;
  model_slug?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "model_translations" */
export type Model_Translations_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  long_description?: InputMaybe<Order_By>;
  model_slug?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "model_translations". */
export type Model_Translations_Order_By = {
  description?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  long_description?: InputMaybe<Order_By>;
  model?: InputMaybe<Models_Order_By>;
  model_slug?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "model_translations" */
export enum Model_Translations_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Locale = 'locale',
  /** column name */
  LongDescription = 'long_description',
  /** column name */
  ModelSlug = 'model_slug',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "model_translations" */
export type Model_Translations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Model_Translations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Model_Translations_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  long_description?: InputMaybe<Scalars['String']['input']>;
  model_slug?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "models" */
export type Models = {
  __typename?: 'models';
  aliases: Array<Scalars['String']['output']>;
  /** An array relationship */
  capabilities: Array<Model_Capabilities>;
  description: Scalars['String']['output'];
  featured: Scalars['Boolean']['output'];
  is_active: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  long_description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  pipeline_models: Array<Pipeline_Models>;
  provider: Scalars['String']['output'];
  /** An object relationship */
  provider_info: Providers;
  public_name?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  sort_order: Scalars['Int']['output'];
  /** An array relationship */
  translations: Array<Model_Translations>;
};


/** columns and relationships of "models" */
export type ModelsCapabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Model_Capabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Model_Capabilities_Order_By>>;
  where?: InputMaybe<Model_Capabilities_Bool_Exp>;
};


/** columns and relationships of "models" */
export type ModelsPipeline_ModelsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Models_Order_By>>;
  where?: InputMaybe<Pipeline_Models_Bool_Exp>;
};


/** columns and relationships of "models" */
export type ModelsTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Model_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Model_Translations_Order_By>>;
  where?: InputMaybe<Model_Translations_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "models". All fields are combined with a logical 'AND'. */
export type Models_Bool_Exp = {
  _and?: InputMaybe<Array<Models_Bool_Exp>>;
  _not?: InputMaybe<Models_Bool_Exp>;
  _or?: InputMaybe<Array<Models_Bool_Exp>>;
  aliases?: InputMaybe<String_Array_Comparison_Exp>;
  capabilities?: InputMaybe<Model_Capabilities_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  featured?: InputMaybe<Boolean_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  long_description?: InputMaybe<String_Comparison_Exp>;
  pipeline_models?: InputMaybe<Pipeline_Models_Bool_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  provider_info?: InputMaybe<Providers_Bool_Exp>;
  public_name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  sort_order?: InputMaybe<Int_Comparison_Exp>;
  translations?: InputMaybe<Model_Translations_Bool_Exp>;
};

/** Ordering options when selecting data from "models". */
export type Models_Order_By = {
  aliases?: InputMaybe<Order_By>;
  capabilities_aggregate?: InputMaybe<Model_Capabilities_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  featured?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  long_description?: InputMaybe<Order_By>;
  pipeline_models_aggregate?: InputMaybe<Pipeline_Models_Aggregate_Order_By>;
  provider?: InputMaybe<Order_By>;
  provider_info?: InputMaybe<Providers_Order_By>;
  public_name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Model_Translations_Aggregate_Order_By>;
};

/** select columns of table "models" */
export enum Models_Select_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  Description = 'description',
  /** column name */
  Featured = 'featured',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Label = 'label',
  /** column name */
  LongDescription = 'long_description',
  /** column name */
  Provider = 'provider',
  /** column name */
  PublicName = 'public_name',
  /** column name */
  Slug = 'slug',
  /** column name */
  SortOrder = 'sort_order'
}

/** Streaming cursor of the table "models" */
export type Models_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Models_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Models_Stream_Cursor_Value_Input = {
  aliases?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  long_description?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  public_name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
};

export type Multipart_Part_Input = {
  ETag: Scalars['String']['input'];
  PartNumber: Scalars['Int']['input'];
};

export type Multipart_Part_Url = {
  __typename?: 'multipart_part_url';
  part_number: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Cancel an in-progress multi-part upload */
  abort_multipart_upload: Abort_Multipart_Upload_Output;
  /** Add a new primary affiliate code */
  add_affiliate_code: Add_Affiliate_Code_Output;
  /** Cancel a scheduled account deletion during the grace period. */
  cancel_account_deletion: Cancel_Account_Deletion_Output;
  /** Cancel a running pipeline and refund credits */
  cancel_pipeline_run?: Maybe<Cancel_Pipeline_Run_Output>;
  /** Cancel your subscription at the end of the current billing period */
  cancel_subscription: Cancel_Subscription_Output;
  /** Update your profile picture */
  change_avatar: Change_Avatar_Output;
  /** Update your display name */
  change_name: Change_Name_Output;
  /** Change your password */
  change_password: Change_Password_Output;
  /** Finalize a multi-part upload and register the asset */
  complete_multipart_upload: Create_Asset_Output;
  /** Confirm and schedule account deletion from the emailed link. */
  confirm_account_deletion: Confirm_Account_Deletion_Output;
  /** Register an uploaded file as an asset */
  create_asset: Create_Asset_Output;
  /** Create a Whop checkout session with the buyer's user_id baked into metadata */
  create_checkout_session: Create_Checkout_Session_Output;
  /** Create a personal access token for API and MCP access */
  create_personal_access_token: Create_Personal_Access_Token_Output;
  /** Delete an asset */
  delete_asset: Delete_Asset_Output;
  /** delete data from the table: "notifications" */
  delete_notifications?: Maybe<Notifications_Mutation_Response>;
  /** delete single row from the table: "notifications" */
  delete_notifications_by_pk?: Maybe<Notifications>;
  /** Create an affiliate profile and referral code for the current user if missing */
  ensure_affiliate: Ensure_Affiliate_Output;
  /** Begin email verification */
  init_verification_flow: Auth_Flow;
  /** Sign in with email and password */
  login: Auth_Result;
  /** Revoke all Kratos sessions for the current user */
  logout: Logout_Output;
  /** Create an account with email and password */
  register: Auth_Result;
  /** Send an email link to confirm account deletion. No changes are made until the link is clicked. */
  request_account_deletion: Request_Account_Deletion_Output;
  /** Request an upload URL for a profile picture */
  request_avatar_upload: Request_Avatar_Upload_Output;
  /** Request upload URLs for a large file sent in multiple parts */
  request_multipart_upload: Request_Multipart_Upload_Output;
  /** Send a password reset email */
  request_password_reset: Auth_Result;
  /** Request a direct upload URL for a file */
  request_upload: Request_Upload_Output;
  /** Set a new password using the emailed code */
  reset_password: Auth_Result;
  /** Revoke a personal access token */
  revoke_personal_access_token: Revoke_Personal_Access_Token_Output;
  /** Start a pipeline run */
  run_pipeline?: Maybe<Run_Pipeline_Output>;
  /** Submit an email verification code */
  submit_verification_code: Auth_Result;
  /** update data of the table: "affiliate_codes" */
  update_affiliate_codes?: Maybe<Affiliate_Codes_Mutation_Response>;
  /** update single row of the table: "affiliate_codes" */
  update_affiliate_codes_by_pk?: Maybe<Affiliate_Codes>;
  /** update multiples rows of table: "affiliate_codes" */
  update_affiliate_codes_many?: Maybe<Array<Maybe<Affiliate_Codes_Mutation_Response>>>;
  /** update data of the table: "assets" */
  update_assets?: Maybe<Assets_Mutation_Response>;
  /** update single row of the table: "assets" */
  update_assets_by_pk?: Maybe<Assets>;
  /** update multiples rows of table: "assets" */
  update_assets_many?: Maybe<Array<Maybe<Assets_Mutation_Response>>>;
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update multiples rows of table: "notifications" */
  update_notifications_many?: Maybe<Array<Maybe<Notifications_Mutation_Response>>>;
  /** update data of the table: "pipeline_runs" */
  update_pipeline_runs?: Maybe<Pipeline_Runs_Mutation_Response>;
  /** update single row of the table: "pipeline_runs" */
  update_pipeline_runs_by_pk?: Maybe<Pipeline_Runs>;
  /** update multiples rows of table: "pipeline_runs" */
  update_pipeline_runs_many?: Maybe<Array<Maybe<Pipeline_Runs_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAbort_Multipart_UploadArgs = {
  key: Scalars['String']['input'];
  upload_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootAdd_Affiliate_CodeArgs = {
  code: Scalars['String']['input'];
  redirect_path?: InputMaybe<Scalars['String']['input']>;
};


/** mutation root */
export type Mutation_RootCancel_Pipeline_RunArgs = {
  run_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootChange_AvatarArgs = {
  avatar_url: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootChange_NameArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootChange_PasswordArgs = {
  current_password: Scalars['String']['input'];
  new_password: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootComplete_Multipart_UploadArgs = {
  content_type: Scalars['String']['input'];
  key: Scalars['String']['input'];
  parts: Array<Multipart_Part_Input>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  upload_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootConfirm_Account_DeletionArgs = {
  token: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootCreate_AssetArgs = {
  key: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** mutation root */
export type Mutation_RootCreate_Checkout_SessionArgs = {
  affiliate_code?: InputMaybe<Scalars['String']['input']>;
  whop_plan_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootCreate_Personal_Access_TokenArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AssetArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInit_Verification_FlowArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  referral_code?: InputMaybe<Scalars['String']['input']>;
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  referral_code?: InputMaybe<Scalars['String']['input']>;
};


/** mutation root */
export type Mutation_RootRequest_Avatar_UploadArgs = {
  content_type: Scalars['String']['input'];
  filename: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootRequest_Multipart_UploadArgs = {
  content_type: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  part_size?: InputMaybe<Scalars['bigint']['input']>;
  total_size: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootRequest_Password_ResetArgs = {
  email: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootRequest_UploadArgs = {
  content_type: Scalars['String']['input'];
  filename: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootReset_PasswordArgs = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootRevoke_Personal_Access_TokenArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootRun_PipelineArgs = {
  input: Scalars['jsonb']['input'];
  pipeline_slug: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootSubmit_Verification_CodeArgs = {
  code: Scalars['String']['input'];
  csrf_token: Scalars['String']['input'];
  flowId: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootUpdate_Affiliate_CodesArgs = {
  _set?: InputMaybe<Affiliate_Codes_Set_Input>;
  where: Affiliate_Codes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Affiliate_Codes_By_PkArgs = {
  _set?: InputMaybe<Affiliate_Codes_Set_Input>;
  pk_columns: Affiliate_Codes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Affiliate_Codes_ManyArgs = {
  updates: Array<Affiliate_Codes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AssetsArgs = {
  _set?: InputMaybe<Assets_Set_Input>;
  where: Assets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assets_By_PkArgs = {
  _set?: InputMaybe<Assets_Set_Input>;
  pk_columns: Assets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assets_ManyArgs = {
  updates: Array<Assets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationsArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_By_PkArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  pk_columns: Notifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_ManyArgs = {
  updates: Array<Notifications_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Pipeline_RunsArgs = {
  _set?: InputMaybe<Pipeline_Runs_Set_Input>;
  where: Pipeline_Runs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pipeline_Runs_By_PkArgs = {
  _set?: InputMaybe<Pipeline_Runs_Set_Input>;
  pk_columns: Pipeline_Runs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pipeline_Runs_ManyArgs = {
  updates: Array<Pipeline_Runs_Updates>;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: 'notifications';
  body?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  read: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


/** columns and relationships of "notifications" */
export type NotificationsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "notifications" */
export type Notifications_Aggregate = {
  __typename?: 'notifications_aggregate';
  aggregate?: Maybe<Notifications_Aggregate_Fields>;
  nodes: Array<Notifications>;
};

/** aggregate fields of "notifications" */
export type Notifications_Aggregate_Fields = {
  __typename?: 'notifications_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Notifications_Max_Fields>;
  min?: Maybe<Notifications_Min_Fields>;
};


/** aggregate fields of "notifications" */
export type Notifications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<Notifications_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  read?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Notifications_Max_Fields = {
  __typename?: 'notifications_max_fields';
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Notifications_Min_Fields = {
  __typename?: 'notifications_min_fields';
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "notifications" */
export type Notifications_Mutation_Response = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** Ordering options when selecting data from "notifications". */
export type Notifications_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  read?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notifications */
export type Notifications_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "notifications" */
export enum Notifications_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Read = 'read',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "notifications" */
export type Notifications_Set_Input = {
  read?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Streaming cursor of the table "notifications" */
export type Notifications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notifications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notifications_Stream_Cursor_Value_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Notifications_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notifications_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notifications_Bool_Exp;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "personal_access_tokens" */
export type Personal_Access_Tokens = {
  __typename?: 'personal_access_tokens';
  created_at: Scalars['timestamptz']['output'];
  expires_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  last_used_at?: Maybe<Scalars['timestamptz']['output']>;
  name: Scalars['String']['output'];
  revoked_at?: Maybe<Scalars['timestamptz']['output']>;
  scopes: Array<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "personal_access_tokens". All fields are combined with a logical 'AND'. */
export type Personal_Access_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Personal_Access_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Personal_Access_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Personal_Access_Tokens_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_used_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  revoked_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  scopes?: InputMaybe<String_Array_Comparison_Exp>;
};

/** Ordering options when selecting data from "personal_access_tokens". */
export type Personal_Access_Tokens_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_used_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  revoked_at?: InputMaybe<Order_By>;
  scopes?: InputMaybe<Order_By>;
};

/** select columns of table "personal_access_tokens" */
export enum Personal_Access_Tokens_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastUsedAt = 'last_used_at',
  /** column name */
  Name = 'name',
  /** column name */
  RevokedAt = 'revoked_at',
  /** column name */
  Scopes = 'scopes'
}

/** Streaming cursor of the table "personal_access_tokens" */
export type Personal_Access_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Personal_Access_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Personal_Access_Tokens_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_used_at?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  revoked_at?: InputMaybe<Scalars['timestamptz']['input']>;
  scopes?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** columns and relationships of "pipeline_examples" */
export type Pipeline_Examples = {
  __typename?: 'pipeline_examples';
  caption?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  input_kind?: Maybe<Scalars['String']['output']>;
  input_url?: Maybe<Scalars['String']['output']>;
  inputs?: Maybe<Scalars['jsonb']['output']>;
  is_active: Scalars['Boolean']['output'];
  /** An object relationship */
  model?: Maybe<Models>;
  model_slug?: Maybe<Scalars['String']['output']>;
  output_kind: Scalars['String']['output'];
  output_url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  pipeline: Pipelines;
  pipeline_id: Scalars['uuid']['output'];
  sort_order: Scalars['Int']['output'];
  thumbnail_url?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  /** An array relationship */
  translations: Array<Pipeline_Examples_Translations>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "pipeline_examples" */
export type Pipeline_ExamplesInputsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "pipeline_examples" */
export type Pipeline_ExamplesTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Examples_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Examples_Translations_Order_By>>;
  where?: InputMaybe<Pipeline_Examples_Translations_Bool_Exp>;
};

/** order by aggregate values of table "pipeline_examples" */
export type Pipeline_Examples_Aggregate_Order_By = {
  avg?: InputMaybe<Pipeline_Examples_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pipeline_Examples_Max_Order_By>;
  min?: InputMaybe<Pipeline_Examples_Min_Order_By>;
  stddev?: InputMaybe<Pipeline_Examples_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pipeline_Examples_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pipeline_Examples_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pipeline_Examples_Sum_Order_By>;
  var_pop?: InputMaybe<Pipeline_Examples_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pipeline_Examples_Var_Samp_Order_By>;
  variance?: InputMaybe<Pipeline_Examples_Variance_Order_By>;
};

/** order by avg() on columns of table "pipeline_examples" */
export type Pipeline_Examples_Avg_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pipeline_examples". All fields are combined with a logical 'AND'. */
export type Pipeline_Examples_Bool_Exp = {
  _and?: InputMaybe<Array<Pipeline_Examples_Bool_Exp>>;
  _not?: InputMaybe<Pipeline_Examples_Bool_Exp>;
  _or?: InputMaybe<Array<Pipeline_Examples_Bool_Exp>>;
  caption?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  input_kind?: InputMaybe<String_Comparison_Exp>;
  input_url?: InputMaybe<String_Comparison_Exp>;
  inputs?: InputMaybe<Jsonb_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  model?: InputMaybe<Models_Bool_Exp>;
  model_slug?: InputMaybe<String_Comparison_Exp>;
  output_kind?: InputMaybe<String_Comparison_Exp>;
  output_url?: InputMaybe<String_Comparison_Exp>;
  pipeline?: InputMaybe<Pipelines_Bool_Exp>;
  pipeline_id?: InputMaybe<Uuid_Comparison_Exp>;
  sort_order?: InputMaybe<Int_Comparison_Exp>;
  thumbnail_url?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  translations?: InputMaybe<Pipeline_Examples_Translations_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "pipeline_examples" */
export type Pipeline_Examples_Max_Order_By = {
  caption?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input_kind?: InputMaybe<Order_By>;
  input_url?: InputMaybe<Order_By>;
  model_slug?: InputMaybe<Order_By>;
  output_kind?: InputMaybe<Order_By>;
  output_url?: InputMaybe<Order_By>;
  pipeline_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "pipeline_examples" */
export type Pipeline_Examples_Min_Order_By = {
  caption?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input_kind?: InputMaybe<Order_By>;
  input_url?: InputMaybe<Order_By>;
  model_slug?: InputMaybe<Order_By>;
  output_kind?: InputMaybe<Order_By>;
  output_url?: InputMaybe<Order_By>;
  pipeline_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "pipeline_examples". */
export type Pipeline_Examples_Order_By = {
  caption?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input_kind?: InputMaybe<Order_By>;
  input_url?: InputMaybe<Order_By>;
  inputs?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  model?: InputMaybe<Models_Order_By>;
  model_slug?: InputMaybe<Order_By>;
  output_kind?: InputMaybe<Order_By>;
  output_url?: InputMaybe<Order_By>;
  pipeline?: InputMaybe<Pipelines_Order_By>;
  pipeline_id?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  thumbnail_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Pipeline_Examples_Translations_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "pipeline_examples" */
export enum Pipeline_Examples_Select_Column {
  /** column name */
  Caption = 'caption',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InputKind = 'input_kind',
  /** column name */
  InputUrl = 'input_url',
  /** column name */
  Inputs = 'inputs',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  ModelSlug = 'model_slug',
  /** column name */
  OutputKind = 'output_kind',
  /** column name */
  OutputUrl = 'output_url',
  /** column name */
  PipelineId = 'pipeline_id',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by stddev() on columns of table "pipeline_examples" */
export type Pipeline_Examples_Stddev_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "pipeline_examples" */
export type Pipeline_Examples_Stddev_Pop_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "pipeline_examples" */
export type Pipeline_Examples_Stddev_Samp_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pipeline_examples" */
export type Pipeline_Examples_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pipeline_Examples_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pipeline_Examples_Stream_Cursor_Value_Input = {
  caption?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input_kind?: InputMaybe<Scalars['String']['input']>;
  input_url?: InputMaybe<Scalars['String']['input']>;
  inputs?: InputMaybe<Scalars['jsonb']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  model_slug?: InputMaybe<Scalars['String']['input']>;
  output_kind?: InputMaybe<Scalars['String']['input']>;
  output_url?: InputMaybe<Scalars['String']['input']>;
  pipeline_id?: InputMaybe<Scalars['uuid']['input']>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
  thumbnail_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by sum() on columns of table "pipeline_examples" */
export type Pipeline_Examples_Sum_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** columns and relationships of "pipeline_examples_translations" */
export type Pipeline_Examples_Translations = {
  __typename?: 'pipeline_examples_translations';
  caption?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  example: Pipeline_Examples;
  example_id: Scalars['uuid']['output'];
  locale: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** order by aggregate values of table "pipeline_examples_translations" */
export type Pipeline_Examples_Translations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pipeline_Examples_Translations_Max_Order_By>;
  min?: InputMaybe<Pipeline_Examples_Translations_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "pipeline_examples_translations". All fields are combined with a logical 'AND'. */
export type Pipeline_Examples_Translations_Bool_Exp = {
  _and?: InputMaybe<Array<Pipeline_Examples_Translations_Bool_Exp>>;
  _not?: InputMaybe<Pipeline_Examples_Translations_Bool_Exp>;
  _or?: InputMaybe<Array<Pipeline_Examples_Translations_Bool_Exp>>;
  caption?: InputMaybe<String_Comparison_Exp>;
  example?: InputMaybe<Pipeline_Examples_Bool_Exp>;
  example_id?: InputMaybe<Uuid_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "pipeline_examples_translations" */
export type Pipeline_Examples_Translations_Max_Order_By = {
  caption?: InputMaybe<Order_By>;
  example_id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "pipeline_examples_translations" */
export type Pipeline_Examples_Translations_Min_Order_By = {
  caption?: InputMaybe<Order_By>;
  example_id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "pipeline_examples_translations". */
export type Pipeline_Examples_Translations_Order_By = {
  caption?: InputMaybe<Order_By>;
  example?: InputMaybe<Pipeline_Examples_Order_By>;
  example_id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "pipeline_examples_translations" */
export enum Pipeline_Examples_Translations_Select_Column {
  /** column name */
  Caption = 'caption',
  /** column name */
  ExampleId = 'example_id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "pipeline_examples_translations" */
export type Pipeline_Examples_Translations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pipeline_Examples_Translations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pipeline_Examples_Translations_Stream_Cursor_Value_Input = {
  caption?: InputMaybe<Scalars['String']['input']>;
  example_id?: InputMaybe<Scalars['uuid']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by var_pop() on columns of table "pipeline_examples" */
export type Pipeline_Examples_Var_Pop_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "pipeline_examples" */
export type Pipeline_Examples_Var_Samp_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "pipeline_examples" */
export type Pipeline_Examples_Variance_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** columns and relationships of "pipeline_models" */
export type Pipeline_Models = {
  __typename?: 'pipeline_models';
  /** An object relationship */
  model: Models;
  model_slug: Scalars['String']['output'];
  pipeline_slug: Scalars['String']['output'];
  sort_order: Scalars['Int']['output'];
};

/** order by aggregate values of table "pipeline_models" */
export type Pipeline_Models_Aggregate_Order_By = {
  avg?: InputMaybe<Pipeline_Models_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pipeline_Models_Max_Order_By>;
  min?: InputMaybe<Pipeline_Models_Min_Order_By>;
  stddev?: InputMaybe<Pipeline_Models_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pipeline_Models_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pipeline_Models_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pipeline_Models_Sum_Order_By>;
  var_pop?: InputMaybe<Pipeline_Models_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pipeline_Models_Var_Samp_Order_By>;
  variance?: InputMaybe<Pipeline_Models_Variance_Order_By>;
};

/** order by avg() on columns of table "pipeline_models" */
export type Pipeline_Models_Avg_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pipeline_models". All fields are combined with a logical 'AND'. */
export type Pipeline_Models_Bool_Exp = {
  _and?: InputMaybe<Array<Pipeline_Models_Bool_Exp>>;
  _not?: InputMaybe<Pipeline_Models_Bool_Exp>;
  _or?: InputMaybe<Array<Pipeline_Models_Bool_Exp>>;
  model?: InputMaybe<Models_Bool_Exp>;
  model_slug?: InputMaybe<String_Comparison_Exp>;
  pipeline_slug?: InputMaybe<String_Comparison_Exp>;
  sort_order?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "pipeline_models" */
export type Pipeline_Models_Max_Order_By = {
  model_slug?: InputMaybe<Order_By>;
  pipeline_slug?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "pipeline_models" */
export type Pipeline_Models_Min_Order_By = {
  model_slug?: InputMaybe<Order_By>;
  pipeline_slug?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "pipeline_models". */
export type Pipeline_Models_Order_By = {
  model?: InputMaybe<Models_Order_By>;
  model_slug?: InputMaybe<Order_By>;
  pipeline_slug?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
};

/** select columns of table "pipeline_models" */
export enum Pipeline_Models_Select_Column {
  /** column name */
  ModelSlug = 'model_slug',
  /** column name */
  PipelineSlug = 'pipeline_slug',
  /** column name */
  SortOrder = 'sort_order'
}

/** order by stddev() on columns of table "pipeline_models" */
export type Pipeline_Models_Stddev_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "pipeline_models" */
export type Pipeline_Models_Stddev_Pop_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "pipeline_models" */
export type Pipeline_Models_Stddev_Samp_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pipeline_models" */
export type Pipeline_Models_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pipeline_Models_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pipeline_Models_Stream_Cursor_Value_Input = {
  model_slug?: InputMaybe<Scalars['String']['input']>;
  pipeline_slug?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "pipeline_models" */
export type Pipeline_Models_Sum_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "pipeline_models" */
export type Pipeline_Models_Var_Pop_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "pipeline_models" */
export type Pipeline_Models_Var_Samp_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "pipeline_models" */
export type Pipeline_Models_Variance_Order_By = {
  sort_order?: InputMaybe<Order_By>;
};

export type Pipeline_Pricing_Row = {
  __typename?: 'pipeline_pricing_row';
  from_mc: Scalars['Int']['output'];
  metered: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  to_mc?: Maybe<Scalars['Int']['output']>;
};

/** columns and relationships of "pipeline_runs" */
export type Pipeline_Runs = {
  __typename?: 'pipeline_runs';
  /** An array relationship */
  assets: Array<Assets>;
  /** An aggregate relationship */
  assets_aggregate: Assets_Aggregate;
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at: Scalars['timestamptz']['output'];
  credits_charged?: Maybe<Scalars['Int']['output']>;
  error_message?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  input: Scalars['jsonb']['output'];
  output?: Maybe<Scalars['jsonb']['output']>;
  /** An object relationship */
  pipeline: Pipelines;
  pipeline_id: Scalars['uuid']['output'];
  share_token?: Maybe<Scalars['uuid']['output']>;
  share_watermark: Scalars['Boolean']['output'];
  started_at?: Maybe<Scalars['timestamptz']['output']>;
  status: Scalars['String']['output'];
  temporal_workflow_id?: Maybe<Scalars['String']['output']>;
  workflow_execution?: Maybe<Executions_Visibility>;
};


/** columns and relationships of "pipeline_runs" */
export type Pipeline_RunsAssetsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};


/** columns and relationships of "pipeline_runs" */
export type Pipeline_RunsAssets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};


/** columns and relationships of "pipeline_runs" */
export type Pipeline_RunsInputArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "pipeline_runs" */
export type Pipeline_RunsOutputArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "pipeline_runs" */
export type Pipeline_Runs_Aggregate = {
  __typename?: 'pipeline_runs_aggregate';
  aggregate?: Maybe<Pipeline_Runs_Aggregate_Fields>;
  nodes: Array<Pipeline_Runs>;
};

/** aggregate fields of "pipeline_runs" */
export type Pipeline_Runs_Aggregate_Fields = {
  __typename?: 'pipeline_runs_aggregate_fields';
  avg?: Maybe<Pipeline_Runs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pipeline_Runs_Max_Fields>;
  min?: Maybe<Pipeline_Runs_Min_Fields>;
  stddev?: Maybe<Pipeline_Runs_Stddev_Fields>;
  stddev_pop?: Maybe<Pipeline_Runs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pipeline_Runs_Stddev_Samp_Fields>;
  sum?: Maybe<Pipeline_Runs_Sum_Fields>;
  var_pop?: Maybe<Pipeline_Runs_Var_Pop_Fields>;
  var_samp?: Maybe<Pipeline_Runs_Var_Samp_Fields>;
  variance?: Maybe<Pipeline_Runs_Variance_Fields>;
};


/** aggregate fields of "pipeline_runs" */
export type Pipeline_Runs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pipeline_Runs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Pipeline_Runs_Avg_Fields = {
  __typename?: 'pipeline_runs_avg_fields';
  credits_charged?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pipeline_runs". All fields are combined with a logical 'AND'. */
export type Pipeline_Runs_Bool_Exp = {
  _and?: InputMaybe<Array<Pipeline_Runs_Bool_Exp>>;
  _not?: InputMaybe<Pipeline_Runs_Bool_Exp>;
  _or?: InputMaybe<Array<Pipeline_Runs_Bool_Exp>>;
  assets?: InputMaybe<Assets_Bool_Exp>;
  assets_aggregate?: InputMaybe<Assets_Aggregate_Bool_Exp>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credits_charged?: InputMaybe<Int_Comparison_Exp>;
  error_message?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  input?: InputMaybe<Jsonb_Comparison_Exp>;
  output?: InputMaybe<Jsonb_Comparison_Exp>;
  pipeline?: InputMaybe<Pipelines_Bool_Exp>;
  pipeline_id?: InputMaybe<Uuid_Comparison_Exp>;
  share_token?: InputMaybe<Uuid_Comparison_Exp>;
  share_watermark?: InputMaybe<Boolean_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  temporal_workflow_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Pipeline_Runs_Max_Fields = {
  __typename?: 'pipeline_runs_max_fields';
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  credits_charged?: Maybe<Scalars['Int']['output']>;
  error_message?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  pipeline_id?: Maybe<Scalars['uuid']['output']>;
  share_token?: Maybe<Scalars['uuid']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  temporal_workflow_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Pipeline_Runs_Min_Fields = {
  __typename?: 'pipeline_runs_min_fields';
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  credits_charged?: Maybe<Scalars['Int']['output']>;
  error_message?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  pipeline_id?: Maybe<Scalars['uuid']['output']>;
  share_token?: Maybe<Scalars['uuid']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  temporal_workflow_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "pipeline_runs" */
export type Pipeline_Runs_Mutation_Response = {
  __typename?: 'pipeline_runs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Pipeline_Runs>;
};

/** Ordering options when selecting data from "pipeline_runs". */
export type Pipeline_Runs_Order_By = {
  assets_aggregate?: InputMaybe<Assets_Aggregate_Order_By>;
  completed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credits_charged?: InputMaybe<Order_By>;
  error_message?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input?: InputMaybe<Order_By>;
  output?: InputMaybe<Order_By>;
  pipeline?: InputMaybe<Pipelines_Order_By>;
  pipeline_id?: InputMaybe<Order_By>;
  share_token?: InputMaybe<Order_By>;
  share_watermark?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  temporal_workflow_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pipeline_runs */
export type Pipeline_Runs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "pipeline_runs" */
export enum Pipeline_Runs_Select_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditsCharged = 'credits_charged',
  /** column name */
  ErrorMessage = 'error_message',
  /** column name */
  Id = 'id',
  /** column name */
  Input = 'input',
  /** column name */
  Output = 'output',
  /** column name */
  PipelineId = 'pipeline_id',
  /** column name */
  ShareToken = 'share_token',
  /** column name */
  ShareWatermark = 'share_watermark',
  /** column name */
  StartedAt = 'started_at',
  /** column name */
  Status = 'status',
  /** column name */
  TemporalWorkflowId = 'temporal_workflow_id'
}

/** input type for updating data in table "pipeline_runs" */
export type Pipeline_Runs_Set_Input = {
  share_token?: InputMaybe<Scalars['uuid']['input']>;
  share_watermark?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Pipeline_Runs_Stddev_Fields = {
  __typename?: 'pipeline_runs_stddev_fields';
  credits_charged?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Pipeline_Runs_Stddev_Pop_Fields = {
  __typename?: 'pipeline_runs_stddev_pop_fields';
  credits_charged?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Pipeline_Runs_Stddev_Samp_Fields = {
  __typename?: 'pipeline_runs_stddev_samp_fields';
  credits_charged?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "pipeline_runs" */
export type Pipeline_Runs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pipeline_Runs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pipeline_Runs_Stream_Cursor_Value_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credits_charged?: InputMaybe<Scalars['Int']['input']>;
  error_message?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  output?: InputMaybe<Scalars['jsonb']['input']>;
  pipeline_id?: InputMaybe<Scalars['uuid']['input']>;
  share_token?: InputMaybe<Scalars['uuid']['input']>;
  share_watermark?: InputMaybe<Scalars['Boolean']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  temporal_workflow_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Pipeline_Runs_Sum_Fields = {
  __typename?: 'pipeline_runs_sum_fields';
  credits_charged?: Maybe<Scalars['Int']['output']>;
};

export type Pipeline_Runs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pipeline_Runs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pipeline_Runs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pipeline_Runs_Var_Pop_Fields = {
  __typename?: 'pipeline_runs_var_pop_fields';
  credits_charged?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Pipeline_Runs_Var_Samp_Fields = {
  __typename?: 'pipeline_runs_var_samp_fields';
  credits_charged?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Pipeline_Runs_Variance_Fields = {
  __typename?: 'pipeline_runs_variance_fields';
  credits_charged?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "pipeline_translations" */
export type Pipeline_Translations = {
  __typename?: 'pipeline_translations';
  description?: Maybe<Scalars['String']['output']>;
  form_i18n?: Maybe<Scalars['jsonb']['output']>;
  hints?: Maybe<Scalars['jsonb']['output']>;
  locale: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  pipeline: Pipelines;
  pipeline_id: Scalars['uuid']['output'];
  seo_content?: Maybe<Scalars['String']['output']>;
  seo_faq?: Maybe<Scalars['jsonb']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "pipeline_translations" */
export type Pipeline_TranslationsForm_I18nArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "pipeline_translations" */
export type Pipeline_TranslationsHintsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "pipeline_translations" */
export type Pipeline_TranslationsSeo_FaqArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "pipeline_translations" */
export type Pipeline_Translations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pipeline_Translations_Max_Order_By>;
  min?: InputMaybe<Pipeline_Translations_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "pipeline_translations". All fields are combined with a logical 'AND'. */
export type Pipeline_Translations_Bool_Exp = {
  _and?: InputMaybe<Array<Pipeline_Translations_Bool_Exp>>;
  _not?: InputMaybe<Pipeline_Translations_Bool_Exp>;
  _or?: InputMaybe<Array<Pipeline_Translations_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  form_i18n?: InputMaybe<Jsonb_Comparison_Exp>;
  hints?: InputMaybe<Jsonb_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pipeline?: InputMaybe<Pipelines_Bool_Exp>;
  pipeline_id?: InputMaybe<Uuid_Comparison_Exp>;
  seo_content?: InputMaybe<String_Comparison_Exp>;
  seo_faq?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "pipeline_translations" */
export type Pipeline_Translations_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pipeline_id?: InputMaybe<Order_By>;
  seo_content?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "pipeline_translations" */
export type Pipeline_Translations_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pipeline_id?: InputMaybe<Order_By>;
  seo_content?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "pipeline_translations". */
export type Pipeline_Translations_Order_By = {
  description?: InputMaybe<Order_By>;
  form_i18n?: InputMaybe<Order_By>;
  hints?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pipeline?: InputMaybe<Pipelines_Order_By>;
  pipeline_id?: InputMaybe<Order_By>;
  seo_content?: InputMaybe<Order_By>;
  seo_faq?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "pipeline_translations" */
export enum Pipeline_Translations_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  FormI18n = 'form_i18n',
  /** column name */
  Hints = 'hints',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  PipelineId = 'pipeline_id',
  /** column name */
  SeoContent = 'seo_content',
  /** column name */
  SeoFaq = 'seo_faq',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "pipeline_translations" */
export type Pipeline_Translations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pipeline_Translations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pipeline_Translations_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  form_i18n?: InputMaybe<Scalars['jsonb']['input']>;
  hints?: InputMaybe<Scalars['jsonb']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pipeline_id?: InputMaybe<Scalars['uuid']['input']>;
  seo_content?: InputMaybe<Scalars['String']['input']>;
  seo_faq?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "pipelines" */
export type Pipelines = {
  __typename?: 'pipelines';
  cancellable: Scalars['Boolean']['output'];
  category: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  examples: Array<Pipeline_Examples>;
  /** Structured metadata for AI orchestrators: best_for, avoid_for, limitations, output_characteristics, composability, quality_tips */
  hints: Scalars['jsonb']['output'];
  icon_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  input_schema: Scalars['jsonb']['output'];
  is_active: Scalars['Boolean']['output'];
  models: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  output_schema: Scalars['jsonb']['output'];
  /** An array relationship */
  pipeline_models: Array<Pipeline_Models>;
  preview_url?: Maybe<Scalars['String']['output']>;
  providers: Array<Scalars['String']['output']>;
  seo_content?: Maybe<Scalars['String']['output']>;
  seo_faq?: Maybe<Scalars['jsonb']['output']>;
  slug: Scalars['String']['output'];
  sort_order: Scalars['Int']['output'];
  tags: Array<Scalars['String']['output']>;
  /** An array relationship */
  translations: Array<Pipeline_Translations>;
  ui_schema: Scalars['jsonb']['output'];
};


/** columns and relationships of "pipelines" */
export type PipelinesExamplesArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Examples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Examples_Order_By>>;
  where?: InputMaybe<Pipeline_Examples_Bool_Exp>;
};


/** columns and relationships of "pipelines" */
export type PipelinesHintsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "pipelines" */
export type PipelinesInput_SchemaArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "pipelines" */
export type PipelinesOutput_SchemaArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "pipelines" */
export type PipelinesPipeline_ModelsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Models_Order_By>>;
  where?: InputMaybe<Pipeline_Models_Bool_Exp>;
};


/** columns and relationships of "pipelines" */
export type PipelinesSeo_FaqArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "pipelines" */
export type PipelinesTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Translations_Order_By>>;
  where?: InputMaybe<Pipeline_Translations_Bool_Exp>;
};


/** columns and relationships of "pipelines" */
export type PipelinesUi_SchemaArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "pipelines". All fields are combined with a logical 'AND'. */
export type Pipelines_Bool_Exp = {
  _and?: InputMaybe<Array<Pipelines_Bool_Exp>>;
  _not?: InputMaybe<Pipelines_Bool_Exp>;
  _or?: InputMaybe<Array<Pipelines_Bool_Exp>>;
  cancellable?: InputMaybe<Boolean_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  examples?: InputMaybe<Pipeline_Examples_Bool_Exp>;
  hints?: InputMaybe<Jsonb_Comparison_Exp>;
  icon_url?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  input_schema?: InputMaybe<Jsonb_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  models?: InputMaybe<String_Array_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  output_schema?: InputMaybe<Jsonb_Comparison_Exp>;
  pipeline_models?: InputMaybe<Pipeline_Models_Bool_Exp>;
  preview_url?: InputMaybe<String_Comparison_Exp>;
  providers?: InputMaybe<String_Array_Comparison_Exp>;
  seo_content?: InputMaybe<String_Comparison_Exp>;
  seo_faq?: InputMaybe<Jsonb_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  sort_order?: InputMaybe<Int_Comparison_Exp>;
  tags?: InputMaybe<String_Array_Comparison_Exp>;
  translations?: InputMaybe<Pipeline_Translations_Bool_Exp>;
  ui_schema?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "pipelines". */
export type Pipelines_Order_By = {
  cancellable?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  examples_aggregate?: InputMaybe<Pipeline_Examples_Aggregate_Order_By>;
  hints?: InputMaybe<Order_By>;
  icon_url?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input_schema?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  models?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  output_schema?: InputMaybe<Order_By>;
  pipeline_models_aggregate?: InputMaybe<Pipeline_Models_Aggregate_Order_By>;
  preview_url?: InputMaybe<Order_By>;
  providers?: InputMaybe<Order_By>;
  seo_content?: InputMaybe<Order_By>;
  seo_faq?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Pipeline_Translations_Aggregate_Order_By>;
  ui_schema?: InputMaybe<Order_By>;
};

/** select columns of table "pipelines" */
export enum Pipelines_Select_Column {
  /** column name */
  Cancellable = 'cancellable',
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  Hints = 'hints',
  /** column name */
  IconUrl = 'icon_url',
  /** column name */
  Id = 'id',
  /** column name */
  InputSchema = 'input_schema',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Models = 'models',
  /** column name */
  Name = 'name',
  /** column name */
  OutputSchema = 'output_schema',
  /** column name */
  PreviewUrl = 'preview_url',
  /** column name */
  Providers = 'providers',
  /** column name */
  SeoContent = 'seo_content',
  /** column name */
  SeoFaq = 'seo_faq',
  /** column name */
  Slug = 'slug',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  Tags = 'tags',
  /** column name */
  UiSchema = 'ui_schema'
}

/** Streaming cursor of the table "pipelines" */
export type Pipelines_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pipelines_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pipelines_Stream_Cursor_Value_Input = {
  cancellable?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Structured metadata for AI orchestrators: best_for, avoid_for, limitations, output_characteristics, composability, quality_tips */
  hints?: InputMaybe<Scalars['jsonb']['input']>;
  icon_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input_schema?: InputMaybe<Scalars['jsonb']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  models?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  output_schema?: InputMaybe<Scalars['jsonb']['input']>;
  preview_url?: InputMaybe<Scalars['String']['input']>;
  providers?: InputMaybe<Array<Scalars['String']['input']>>;
  seo_content?: InputMaybe<Scalars['String']['input']>;
  seo_faq?: InputMaybe<Scalars['jsonb']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  ui_schema?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "plan_translations" */
export type Plan_Translations = {
  __typename?: 'plan_translations';
  description?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Scalars['jsonb']['output']>;
  locale: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  plan_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "plan_translations" */
export type Plan_TranslationsFeaturesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "plan_translations" */
export type Plan_Translations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Plan_Translations_Max_Order_By>;
  min?: InputMaybe<Plan_Translations_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "plan_translations". All fields are combined with a logical 'AND'. */
export type Plan_Translations_Bool_Exp = {
  _and?: InputMaybe<Array<Plan_Translations_Bool_Exp>>;
  _not?: InputMaybe<Plan_Translations_Bool_Exp>;
  _or?: InputMaybe<Array<Plan_Translations_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  features?: InputMaybe<Jsonb_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  plan_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "plan_translations" */
export type Plan_Translations_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "plan_translations" */
export type Plan_Translations_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "plan_translations". */
export type Plan_Translations_Order_By = {
  description?: InputMaybe<Order_By>;
  features?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "plan_translations" */
export enum Plan_Translations_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Features = 'features',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  PlanId = 'plan_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "plan_translations" */
export type Plan_Translations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plan_Translations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plan_Translations_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Scalars['jsonb']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  plan_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "plan_versions" */
export type Plan_Versions = {
  __typename?: 'plan_versions';
  created_at: Scalars['timestamptz']['output'];
  deprecated_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  is_current: Scalars['Boolean']['output'];
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes: Scalars['bigint']['output'];
  /** Per-asset-type upload caps as JSON: {"image": <bytes>, "video": <bytes>, "audio": <bytes>}. */
  max_upload_bytes: Scalars['jsonb']['output'];
  monthly_credits: Scalars['Int']['output'];
  /** An object relationship */
  plan: Plans;
  plan_id: Scalars['uuid']['output'];
  price_cents: Scalars['Int']['output'];
  /** An array relationship */
  subscriptions: Array<Subscriptions>;
  version: Scalars['Int']['output'];
  whop_plan_id?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "plan_versions" */
export type Plan_VersionsMax_Upload_BytesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "plan_versions" */
export type Plan_VersionsSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};

/** order by aggregate values of table "plan_versions" */
export type Plan_Versions_Aggregate_Order_By = {
  avg?: InputMaybe<Plan_Versions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Plan_Versions_Max_Order_By>;
  min?: InputMaybe<Plan_Versions_Min_Order_By>;
  stddev?: InputMaybe<Plan_Versions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Plan_Versions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Plan_Versions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Plan_Versions_Sum_Order_By>;
  var_pop?: InputMaybe<Plan_Versions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Plan_Versions_Var_Samp_Order_By>;
  variance?: InputMaybe<Plan_Versions_Variance_Order_By>;
};

/** order by avg() on columns of table "plan_versions" */
export type Plan_Versions_Avg_Order_By = {
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes?: InputMaybe<Order_By>;
  monthly_credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "plan_versions". All fields are combined with a logical 'AND'. */
export type Plan_Versions_Bool_Exp = {
  _and?: InputMaybe<Array<Plan_Versions_Bool_Exp>>;
  _not?: InputMaybe<Plan_Versions_Bool_Exp>;
  _or?: InputMaybe<Array<Plan_Versions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deprecated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_current?: InputMaybe<Boolean_Comparison_Exp>;
  max_storage_bytes?: InputMaybe<Bigint_Comparison_Exp>;
  max_upload_bytes?: InputMaybe<Jsonb_Comparison_Exp>;
  monthly_credits?: InputMaybe<Int_Comparison_Exp>;
  plan?: InputMaybe<Plans_Bool_Exp>;
  plan_id?: InputMaybe<Uuid_Comparison_Exp>;
  price_cents?: InputMaybe<Int_Comparison_Exp>;
  subscriptions?: InputMaybe<Subscriptions_Bool_Exp>;
  version?: InputMaybe<Int_Comparison_Exp>;
  whop_plan_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "plan_versions" */
export type Plan_Versions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deprecated_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes?: InputMaybe<Order_By>;
  monthly_credits?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  whop_plan_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "plan_versions" */
export type Plan_Versions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deprecated_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes?: InputMaybe<Order_By>;
  monthly_credits?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  whop_plan_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "plan_versions". */
export type Plan_Versions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deprecated_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_current?: InputMaybe<Order_By>;
  max_storage_bytes?: InputMaybe<Order_By>;
  max_upload_bytes?: InputMaybe<Order_By>;
  monthly_credits?: InputMaybe<Order_By>;
  plan?: InputMaybe<Plans_Order_By>;
  plan_id?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  subscriptions_aggregate?: InputMaybe<Subscriptions_Aggregate_Order_By>;
  version?: InputMaybe<Order_By>;
  whop_plan_id?: InputMaybe<Order_By>;
};

/** select columns of table "plan_versions" */
export enum Plan_Versions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeprecatedAt = 'deprecated_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCurrent = 'is_current',
  /** column name */
  MaxStorageBytes = 'max_storage_bytes',
  /** column name */
  MaxUploadBytes = 'max_upload_bytes',
  /** column name */
  MonthlyCredits = 'monthly_credits',
  /** column name */
  PlanId = 'plan_id',
  /** column name */
  PriceCents = 'price_cents',
  /** column name */
  Version = 'version',
  /** column name */
  WhopPlanId = 'whop_plan_id'
}

/** order by stddev() on columns of table "plan_versions" */
export type Plan_Versions_Stddev_Order_By = {
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes?: InputMaybe<Order_By>;
  monthly_credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "plan_versions" */
export type Plan_Versions_Stddev_Pop_Order_By = {
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes?: InputMaybe<Order_By>;
  monthly_credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "plan_versions" */
export type Plan_Versions_Stddev_Samp_Order_By = {
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes?: InputMaybe<Order_By>;
  monthly_credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "plan_versions" */
export type Plan_Versions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plan_Versions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plan_Versions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deprecated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes?: InputMaybe<Scalars['bigint']['input']>;
  /** Per-asset-type upload caps as JSON: {"image": <bytes>, "video": <bytes>, "audio": <bytes>}. */
  max_upload_bytes?: InputMaybe<Scalars['jsonb']['input']>;
  monthly_credits?: InputMaybe<Scalars['Int']['input']>;
  plan_id?: InputMaybe<Scalars['uuid']['input']>;
  price_cents?: InputMaybe<Scalars['Int']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  whop_plan_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "plan_versions" */
export type Plan_Versions_Sum_Order_By = {
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes?: InputMaybe<Order_By>;
  monthly_credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "plan_versions" */
export type Plan_Versions_Var_Pop_Order_By = {
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes?: InputMaybe<Order_By>;
  monthly_credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "plan_versions" */
export type Plan_Versions_Var_Samp_Order_By = {
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes?: InputMaybe<Order_By>;
  monthly_credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "plan_versions" */
export type Plan_Versions_Variance_Order_By = {
  /** Total library size cap in bytes. 0 means no quota seeded yet (treat as denied). */
  max_storage_bytes?: InputMaybe<Order_By>;
  monthly_credits?: InputMaybe<Order_By>;
  price_cents?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** columns and relationships of "plans" */
export type Plans = {
  __typename?: 'plans';
  description?: Maybe<Scalars['String']['output']>;
  features: Scalars['jsonb']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  sort_order: Scalars['Int']['output'];
  /** An array relationship */
  translations: Array<Plan_Translations>;
  /** An array relationship */
  versions: Array<Plan_Versions>;
};


/** columns and relationships of "plans" */
export type PlansFeaturesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "plans" */
export type PlansTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Plan_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Translations_Order_By>>;
  where?: InputMaybe<Plan_Translations_Bool_Exp>;
};


/** columns and relationships of "plans" */
export type PlansVersionsArgs = {
  distinct_on?: InputMaybe<Array<Plan_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Versions_Order_By>>;
  where?: InputMaybe<Plan_Versions_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "plans". All fields are combined with a logical 'AND'. */
export type Plans_Bool_Exp = {
  _and?: InputMaybe<Array<Plans_Bool_Exp>>;
  _not?: InputMaybe<Plans_Bool_Exp>;
  _or?: InputMaybe<Array<Plans_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  features?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  sort_order?: InputMaybe<Int_Comparison_Exp>;
  translations?: InputMaybe<Plan_Translations_Bool_Exp>;
  versions?: InputMaybe<Plan_Versions_Bool_Exp>;
};

/** Ordering options when selecting data from "plans". */
export type Plans_Order_By = {
  description?: InputMaybe<Order_By>;
  features?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Plan_Translations_Aggregate_Order_By>;
  versions_aggregate?: InputMaybe<Plan_Versions_Aggregate_Order_By>;
};

/** select columns of table "plans" */
export enum Plans_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Features = 'features',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  SortOrder = 'sort_order'
}

/** Streaming cursor of the table "plans" */
export type Plans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plans_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "providers" */
export type Providers = {
  __typename?: 'providers';
  label?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "providers". All fields are combined with a logical 'AND'. */
export type Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Providers_Bool_Exp>>;
  _not?: InputMaybe<Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Providers_Bool_Exp>>;
  label?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "providers". */
export type Providers_Order_By = {
  label?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** select columns of table "providers" */
export enum Providers_Select_Column {
  /** column name */
  Label = 'label',
  /** column name */
  Slug = 'slug'
}

/** Streaming cursor of the table "providers" */
export type Providers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Providers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Providers_Stream_Cursor_Value_Input = {
  label?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "affiliate_codes" */
  affiliate_codes: Array<Affiliate_Codes>;
  /** fetch data from the table: "affiliate_codes" using primary key columns */
  affiliate_codes_by_pk?: Maybe<Affiliate_Codes>;
  /** fetch data from the table: "affiliates" */
  affiliates: Array<Affiliates>;
  /** fetch data from the table: "affiliates" using primary key columns */
  affiliates_by_pk?: Maybe<Affiliates>;
  /** An array relationship */
  assets: Array<Assets>;
  /** An aggregate relationship */
  assets_aggregate: Assets_Aggregate;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** fetch data from the table: "credit_pack_translations" */
  credit_pack_translations: Array<Credit_Pack_Translations>;
  /** fetch data from the table: "credit_pack_translations" using primary key columns */
  credit_pack_translations_by_pk?: Maybe<Credit_Pack_Translations>;
  /** fetch data from the table: "credit_pack_versions" */
  credit_pack_versions: Array<Credit_Pack_Versions>;
  /** fetch data from the table: "credit_pack_versions" using primary key columns */
  credit_pack_versions_by_pk?: Maybe<Credit_Pack_Versions>;
  /** fetch data from the table: "credit_packs" */
  credit_packs: Array<Credit_Packs>;
  /** fetch data from the table: "credit_packs" using primary key columns */
  credit_packs_by_pk?: Maybe<Credit_Packs>;
  /** Get the currently signed-in user */
  current_user: Current_User_Output;
  /** Preview the credit cost of running a pipeline with a given input (read-only) */
  estimate_pipeline_cost?: Maybe<Estimate_Pipeline_Cost_Output>;
  /** fetch data from the table: "executions_visibility" */
  executions_visibility: Array<Executions_Visibility>;
  /** Get your current credit balance */
  get_credit_balance?: Maybe<Credit_Balance_Output>;
  /** Get your credit transaction history */
  get_credit_history: Array<Credit_History_Entry>;
  /** Get your referral stats and referred users */
  get_my_referrals: Get_My_Referrals_Output;
  /** fetch data from the table: "locales" */
  locales: Array<Locales>;
  /** fetch data from the table: "locales" using primary key columns */
  locales_by_pk?: Maybe<Locales>;
  /** fetch data from the table: "model_capabilities" */
  model_capabilities: Array<Model_Capabilities>;
  /** fetch data from the table: "model_capabilities" using primary key columns */
  model_capabilities_by_pk?: Maybe<Model_Capabilities>;
  /** fetch data from the table: "model_translations" */
  model_translations: Array<Model_Translations>;
  /** fetch data from the table: "model_translations" using primary key columns */
  model_translations_by_pk?: Maybe<Model_Translations>;
  /** fetch data from the table: "models" */
  models: Array<Models>;
  /** fetch data from the table: "models" using primary key columns */
  models_by_pk?: Maybe<Models>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "personal_access_tokens" */
  personal_access_tokens: Array<Personal_Access_Tokens>;
  /** fetch data from the table: "personal_access_tokens" using primary key columns */
  personal_access_tokens_by_pk?: Maybe<Personal_Access_Tokens>;
  /** fetch data from the table: "pipeline_examples" */
  pipeline_examples: Array<Pipeline_Examples>;
  /** fetch data from the table: "pipeline_examples" using primary key columns */
  pipeline_examples_by_pk?: Maybe<Pipeline_Examples>;
  /** fetch data from the table: "pipeline_examples_translations" */
  pipeline_examples_translations: Array<Pipeline_Examples_Translations>;
  /** fetch data from the table: "pipeline_examples_translations" using primary key columns */
  pipeline_examples_translations_by_pk?: Maybe<Pipeline_Examples_Translations>;
  /** An array relationship */
  pipeline_models: Array<Pipeline_Models>;
  /** fetch data from the table: "pipeline_models" using primary key columns */
  pipeline_models_by_pk?: Maybe<Pipeline_Models>;
  /** Credit pricing for pipelines */
  pipeline_pricing: Array<Pipeline_Pricing_Row>;
  /** fetch data from the table: "pipeline_runs" */
  pipeline_runs: Array<Pipeline_Runs>;
  /** fetch aggregated fields from the table: "pipeline_runs" */
  pipeline_runs_aggregate: Pipeline_Runs_Aggregate;
  /** fetch data from the table: "pipeline_runs" using primary key columns */
  pipeline_runs_by_pk?: Maybe<Pipeline_Runs>;
  /** fetch data from the table: "pipeline_translations" */
  pipeline_translations: Array<Pipeline_Translations>;
  /** fetch data from the table: "pipeline_translations" using primary key columns */
  pipeline_translations_by_pk?: Maybe<Pipeline_Translations>;
  /** fetch data from the table: "pipelines" */
  pipelines: Array<Pipelines>;
  /** fetch data from the table: "pipelines" using primary key columns */
  pipelines_by_pk?: Maybe<Pipelines>;
  /** fetch data from the table: "plan_translations" */
  plan_translations: Array<Plan_Translations>;
  /** fetch data from the table: "plan_translations" using primary key columns */
  plan_translations_by_pk?: Maybe<Plan_Translations>;
  /** fetch data from the table: "plan_versions" */
  plan_versions: Array<Plan_Versions>;
  /** fetch data from the table: "plan_versions" using primary key columns */
  plan_versions_by_pk?: Maybe<Plan_Versions>;
  /** fetch data from the table: "plans" */
  plans: Array<Plans>;
  /** fetch data from the table: "plans" using primary key columns */
  plans_by_pk?: Maybe<Plans>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** An array relationship */
  subscriptions: Array<Subscriptions>;
  /** fetch data from the table: "subscriptions" using primary key columns */
  subscriptions_by_pk?: Maybe<Subscriptions>;
};


export type Query_RootAffiliate_CodesArgs = {
  distinct_on?: InputMaybe<Array<Affiliate_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Affiliate_Codes_Order_By>>;
  where?: InputMaybe<Affiliate_Codes_Bool_Exp>;
};


export type Query_RootAffiliate_Codes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAffiliatesArgs = {
  distinct_on?: InputMaybe<Array<Affiliates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Affiliates_Order_By>>;
  where?: InputMaybe<Affiliates_Bool_Exp>;
};


export type Query_RootAffiliates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAssetsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};


export type Query_RootAssets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};


export type Query_RootAssets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCredit_Pack_TranslationsArgs = {
  distinct_on?: InputMaybe<Array<Credit_Pack_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Pack_Translations_Order_By>>;
  where?: InputMaybe<Credit_Pack_Translations_Bool_Exp>;
};


export type Query_RootCredit_Pack_Translations_By_PkArgs = {
  credit_pack_id: Scalars['uuid']['input'];
  locale: Scalars['String']['input'];
};


export type Query_RootCredit_Pack_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Credit_Pack_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Pack_Versions_Order_By>>;
  where?: InputMaybe<Credit_Pack_Versions_Bool_Exp>;
};


export type Query_RootCredit_Pack_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCredit_PacksArgs = {
  distinct_on?: InputMaybe<Array<Credit_Packs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Packs_Order_By>>;
  where?: InputMaybe<Credit_Packs_Bool_Exp>;
};


export type Query_RootCredit_Packs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEstimate_Pipeline_CostArgs = {
  input: Scalars['jsonb']['input'];
  pipeline_slug: Scalars['String']['input'];
};


export type Query_RootExecutions_VisibilityArgs = {
  distinct_on?: InputMaybe<Array<Executions_Visibility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Executions_Visibility_Order_By>>;
  where?: InputMaybe<Executions_Visibility_Bool_Exp>;
};


export type Query_RootLocalesArgs = {
  distinct_on?: InputMaybe<Array<Locales_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locales_Order_By>>;
  where?: InputMaybe<Locales_Bool_Exp>;
};


export type Query_RootLocales_By_PkArgs = {
  code: Scalars['String']['input'];
};


export type Query_RootModel_CapabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Model_Capabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Model_Capabilities_Order_By>>;
  where?: InputMaybe<Model_Capabilities_Bool_Exp>;
};


export type Query_RootModel_Capabilities_By_PkArgs = {
  capability_slug: Scalars['String']['input'];
  model_slug: Scalars['String']['input'];
};


export type Query_RootModel_TranslationsArgs = {
  distinct_on?: InputMaybe<Array<Model_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Model_Translations_Order_By>>;
  where?: InputMaybe<Model_Translations_Bool_Exp>;
};


export type Query_RootModel_Translations_By_PkArgs = {
  locale: Scalars['String']['input'];
  model_slug: Scalars['String']['input'];
};


export type Query_RootModelsArgs = {
  distinct_on?: InputMaybe<Array<Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Models_Order_By>>;
  where?: InputMaybe<Models_Bool_Exp>;
};


export type Query_RootModels_By_PkArgs = {
  slug: Scalars['String']['input'];
};


export type Query_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPersonal_Access_TokensArgs = {
  distinct_on?: InputMaybe<Array<Personal_Access_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personal_Access_Tokens_Order_By>>;
  where?: InputMaybe<Personal_Access_Tokens_Bool_Exp>;
};


export type Query_RootPersonal_Access_Tokens_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPipeline_ExamplesArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Examples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Examples_Order_By>>;
  where?: InputMaybe<Pipeline_Examples_Bool_Exp>;
};


export type Query_RootPipeline_Examples_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPipeline_Examples_TranslationsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Examples_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Examples_Translations_Order_By>>;
  where?: InputMaybe<Pipeline_Examples_Translations_Bool_Exp>;
};


export type Query_RootPipeline_Examples_Translations_By_PkArgs = {
  example_id: Scalars['uuid']['input'];
  locale: Scalars['String']['input'];
};


export type Query_RootPipeline_ModelsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Models_Order_By>>;
  where?: InputMaybe<Pipeline_Models_Bool_Exp>;
};


export type Query_RootPipeline_Models_By_PkArgs = {
  model_slug: Scalars['String']['input'];
  pipeline_slug: Scalars['String']['input'];
};


export type Query_RootPipeline_RunsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Runs_Order_By>>;
  where?: InputMaybe<Pipeline_Runs_Bool_Exp>;
};


export type Query_RootPipeline_Runs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Runs_Order_By>>;
  where?: InputMaybe<Pipeline_Runs_Bool_Exp>;
};


export type Query_RootPipeline_Runs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPipeline_TranslationsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Translations_Order_By>>;
  where?: InputMaybe<Pipeline_Translations_Bool_Exp>;
};


export type Query_RootPipeline_Translations_By_PkArgs = {
  locale: Scalars['String']['input'];
  pipeline_id: Scalars['uuid']['input'];
};


export type Query_RootPipelinesArgs = {
  distinct_on?: InputMaybe<Array<Pipelines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipelines_Order_By>>;
  where?: InputMaybe<Pipelines_Bool_Exp>;
};


export type Query_RootPipelines_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlan_TranslationsArgs = {
  distinct_on?: InputMaybe<Array<Plan_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Translations_Order_By>>;
  where?: InputMaybe<Plan_Translations_Bool_Exp>;
};


export type Query_RootPlan_Translations_By_PkArgs = {
  locale: Scalars['String']['input'];
  plan_id: Scalars['uuid']['input'];
};


export type Query_RootPlan_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Plan_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Versions_Order_By>>;
  where?: InputMaybe<Plan_Versions_Bool_Exp>;
};


export type Query_RootPlan_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlansArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Query_RootPlans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Query_RootProviders_By_PkArgs = {
  slug: Scalars['String']['input'];
};


export type Query_RootSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Query_RootSubscriptions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Referral_Entry = {
  __typename?: 'referral_entry';
  commission_cents: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  plan_name: Scalars['String']['output'];
  signed_up_at: Scalars['String']['output'];
  subscription_status: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

export type Request_Account_Deletion_Output = {
  __typename?: 'request_account_deletion_output';
  expires_at: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Request_Avatar_Upload_Output = {
  __typename?: 'request_avatar_upload_output';
  asset_url: Scalars['String']['output'];
  key: Scalars['String']['output'];
  max_size: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
  upload_url: Scalars['String']['output'];
};

export type Request_Multipart_Upload_Output = {
  __typename?: 'request_multipart_upload_output';
  asset_url: Scalars['String']['output'];
  key: Scalars['String']['output'];
  part_size: Scalars['bigint']['output'];
  part_urls: Array<Multipart_Part_Url>;
  upload_id: Scalars['String']['output'];
};

export type Request_Upload_Output = {
  __typename?: 'request_upload_output';
  asset_url: Scalars['String']['output'];
  key: Scalars['String']['output'];
  upload_url: Scalars['String']['output'];
};

export type Revoke_Personal_Access_Token_Output = {
  __typename?: 'revoke_personal_access_token_output';
  revoked_at: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Run_Pipeline_Output = {
  __typename?: 'run_pipeline_output';
  run_id: Scalars['String']['output'];
  workflow_id: Scalars['String']['output'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "affiliate_codes" */
  affiliate_codes: Array<Affiliate_Codes>;
  /** fetch data from the table: "affiliate_codes" using primary key columns */
  affiliate_codes_by_pk?: Maybe<Affiliate_Codes>;
  /** fetch data from the table in a streaming manner: "affiliate_codes" */
  affiliate_codes_stream: Array<Affiliate_Codes>;
  /** fetch data from the table: "affiliates" */
  affiliates: Array<Affiliates>;
  /** fetch data from the table: "affiliates" using primary key columns */
  affiliates_by_pk?: Maybe<Affiliates>;
  /** fetch data from the table in a streaming manner: "affiliates" */
  affiliates_stream: Array<Affiliates>;
  /** An array relationship */
  assets: Array<Assets>;
  /** An aggregate relationship */
  assets_aggregate: Assets_Aggregate;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** fetch data from the table in a streaming manner: "assets" */
  assets_stream: Array<Assets>;
  /** fetch data from the table: "credit_pack_translations" */
  credit_pack_translations: Array<Credit_Pack_Translations>;
  /** fetch data from the table: "credit_pack_translations" using primary key columns */
  credit_pack_translations_by_pk?: Maybe<Credit_Pack_Translations>;
  /** fetch data from the table in a streaming manner: "credit_pack_translations" */
  credit_pack_translations_stream: Array<Credit_Pack_Translations>;
  /** fetch data from the table: "credit_pack_versions" */
  credit_pack_versions: Array<Credit_Pack_Versions>;
  /** fetch data from the table: "credit_pack_versions" using primary key columns */
  credit_pack_versions_by_pk?: Maybe<Credit_Pack_Versions>;
  /** fetch data from the table in a streaming manner: "credit_pack_versions" */
  credit_pack_versions_stream: Array<Credit_Pack_Versions>;
  /** fetch data from the table: "credit_packs" */
  credit_packs: Array<Credit_Packs>;
  /** fetch data from the table: "credit_packs" using primary key columns */
  credit_packs_by_pk?: Maybe<Credit_Packs>;
  /** fetch data from the table in a streaming manner: "credit_packs" */
  credit_packs_stream: Array<Credit_Packs>;
  /** fetch data from the table: "executions_visibility" */
  executions_visibility: Array<Executions_Visibility>;
  /** fetch data from the table in a streaming manner: "executions_visibility" */
  executions_visibility_stream: Array<Executions_Visibility>;
  /** fetch data from the table: "locales" */
  locales: Array<Locales>;
  /** fetch data from the table: "locales" using primary key columns */
  locales_by_pk?: Maybe<Locales>;
  /** fetch data from the table in a streaming manner: "locales" */
  locales_stream: Array<Locales>;
  /** fetch data from the table: "model_capabilities" */
  model_capabilities: Array<Model_Capabilities>;
  /** fetch data from the table: "model_capabilities" using primary key columns */
  model_capabilities_by_pk?: Maybe<Model_Capabilities>;
  /** fetch data from the table in a streaming manner: "model_capabilities" */
  model_capabilities_stream: Array<Model_Capabilities>;
  /** fetch data from the table: "model_translations" */
  model_translations: Array<Model_Translations>;
  /** fetch data from the table: "model_translations" using primary key columns */
  model_translations_by_pk?: Maybe<Model_Translations>;
  /** fetch data from the table in a streaming manner: "model_translations" */
  model_translations_stream: Array<Model_Translations>;
  /** fetch data from the table: "models" */
  models: Array<Models>;
  /** fetch data from the table: "models" using primary key columns */
  models_by_pk?: Maybe<Models>;
  /** fetch data from the table in a streaming manner: "models" */
  models_stream: Array<Models>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table in a streaming manner: "notifications" */
  notifications_stream: Array<Notifications>;
  /** fetch data from the table: "personal_access_tokens" */
  personal_access_tokens: Array<Personal_Access_Tokens>;
  /** fetch data from the table: "personal_access_tokens" using primary key columns */
  personal_access_tokens_by_pk?: Maybe<Personal_Access_Tokens>;
  /** fetch data from the table in a streaming manner: "personal_access_tokens" */
  personal_access_tokens_stream: Array<Personal_Access_Tokens>;
  /** fetch data from the table: "pipeline_examples" */
  pipeline_examples: Array<Pipeline_Examples>;
  /** fetch data from the table: "pipeline_examples" using primary key columns */
  pipeline_examples_by_pk?: Maybe<Pipeline_Examples>;
  /** fetch data from the table in a streaming manner: "pipeline_examples" */
  pipeline_examples_stream: Array<Pipeline_Examples>;
  /** fetch data from the table: "pipeline_examples_translations" */
  pipeline_examples_translations: Array<Pipeline_Examples_Translations>;
  /** fetch data from the table: "pipeline_examples_translations" using primary key columns */
  pipeline_examples_translations_by_pk?: Maybe<Pipeline_Examples_Translations>;
  /** fetch data from the table in a streaming manner: "pipeline_examples_translations" */
  pipeline_examples_translations_stream: Array<Pipeline_Examples_Translations>;
  /** An array relationship */
  pipeline_models: Array<Pipeline_Models>;
  /** fetch data from the table: "pipeline_models" using primary key columns */
  pipeline_models_by_pk?: Maybe<Pipeline_Models>;
  /** fetch data from the table in a streaming manner: "pipeline_models" */
  pipeline_models_stream: Array<Pipeline_Models>;
  /** fetch data from the table: "pipeline_runs" */
  pipeline_runs: Array<Pipeline_Runs>;
  /** fetch aggregated fields from the table: "pipeline_runs" */
  pipeline_runs_aggregate: Pipeline_Runs_Aggregate;
  /** fetch data from the table: "pipeline_runs" using primary key columns */
  pipeline_runs_by_pk?: Maybe<Pipeline_Runs>;
  /** fetch data from the table in a streaming manner: "pipeline_runs" */
  pipeline_runs_stream: Array<Pipeline_Runs>;
  /** fetch data from the table: "pipeline_translations" */
  pipeline_translations: Array<Pipeline_Translations>;
  /** fetch data from the table: "pipeline_translations" using primary key columns */
  pipeline_translations_by_pk?: Maybe<Pipeline_Translations>;
  /** fetch data from the table in a streaming manner: "pipeline_translations" */
  pipeline_translations_stream: Array<Pipeline_Translations>;
  /** fetch data from the table: "pipelines" */
  pipelines: Array<Pipelines>;
  /** fetch data from the table: "pipelines" using primary key columns */
  pipelines_by_pk?: Maybe<Pipelines>;
  /** fetch data from the table in a streaming manner: "pipelines" */
  pipelines_stream: Array<Pipelines>;
  /** fetch data from the table: "plan_translations" */
  plan_translations: Array<Plan_Translations>;
  /** fetch data from the table: "plan_translations" using primary key columns */
  plan_translations_by_pk?: Maybe<Plan_Translations>;
  /** fetch data from the table in a streaming manner: "plan_translations" */
  plan_translations_stream: Array<Plan_Translations>;
  /** fetch data from the table: "plan_versions" */
  plan_versions: Array<Plan_Versions>;
  /** fetch data from the table: "plan_versions" using primary key columns */
  plan_versions_by_pk?: Maybe<Plan_Versions>;
  /** fetch data from the table in a streaming manner: "plan_versions" */
  plan_versions_stream: Array<Plan_Versions>;
  /** fetch data from the table: "plans" */
  plans: Array<Plans>;
  /** fetch data from the table: "plans" using primary key columns */
  plans_by_pk?: Maybe<Plans>;
  /** fetch data from the table in a streaming manner: "plans" */
  plans_stream: Array<Plans>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** fetch data from the table in a streaming manner: "providers" */
  providers_stream: Array<Providers>;
  /** An array relationship */
  subscriptions: Array<Subscriptions>;
  /** fetch data from the table: "subscriptions" using primary key columns */
  subscriptions_by_pk?: Maybe<Subscriptions>;
  /** fetch data from the table in a streaming manner: "subscriptions" */
  subscriptions_stream: Array<Subscriptions>;
};


export type Subscription_RootAffiliate_CodesArgs = {
  distinct_on?: InputMaybe<Array<Affiliate_Codes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Affiliate_Codes_Order_By>>;
  where?: InputMaybe<Affiliate_Codes_Bool_Exp>;
};


export type Subscription_RootAffiliate_Codes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAffiliate_Codes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Affiliate_Codes_Stream_Cursor_Input>>;
  where?: InputMaybe<Affiliate_Codes_Bool_Exp>;
};


export type Subscription_RootAffiliatesArgs = {
  distinct_on?: InputMaybe<Array<Affiliates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Affiliates_Order_By>>;
  where?: InputMaybe<Affiliates_Bool_Exp>;
};


export type Subscription_RootAffiliates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAffiliates_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Affiliates_Stream_Cursor_Input>>;
  where?: InputMaybe<Affiliates_Bool_Exp>;
};


export type Subscription_RootAssetsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};


export type Subscription_RootAssets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};


export type Subscription_RootAssets_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAssets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Assets_Stream_Cursor_Input>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};


export type Subscription_RootCredit_Pack_TranslationsArgs = {
  distinct_on?: InputMaybe<Array<Credit_Pack_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Pack_Translations_Order_By>>;
  where?: InputMaybe<Credit_Pack_Translations_Bool_Exp>;
};


export type Subscription_RootCredit_Pack_Translations_By_PkArgs = {
  credit_pack_id: Scalars['uuid']['input'];
  locale: Scalars['String']['input'];
};


export type Subscription_RootCredit_Pack_Translations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Credit_Pack_Translations_Stream_Cursor_Input>>;
  where?: InputMaybe<Credit_Pack_Translations_Bool_Exp>;
};


export type Subscription_RootCredit_Pack_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Credit_Pack_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Pack_Versions_Order_By>>;
  where?: InputMaybe<Credit_Pack_Versions_Bool_Exp>;
};


export type Subscription_RootCredit_Pack_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCredit_Pack_Versions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Credit_Pack_Versions_Stream_Cursor_Input>>;
  where?: InputMaybe<Credit_Pack_Versions_Bool_Exp>;
};


export type Subscription_RootCredit_PacksArgs = {
  distinct_on?: InputMaybe<Array<Credit_Packs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Packs_Order_By>>;
  where?: InputMaybe<Credit_Packs_Bool_Exp>;
};


export type Subscription_RootCredit_Packs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCredit_Packs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Credit_Packs_Stream_Cursor_Input>>;
  where?: InputMaybe<Credit_Packs_Bool_Exp>;
};


export type Subscription_RootExecutions_VisibilityArgs = {
  distinct_on?: InputMaybe<Array<Executions_Visibility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Executions_Visibility_Order_By>>;
  where?: InputMaybe<Executions_Visibility_Bool_Exp>;
};


export type Subscription_RootExecutions_Visibility_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Executions_Visibility_Stream_Cursor_Input>>;
  where?: InputMaybe<Executions_Visibility_Bool_Exp>;
};


export type Subscription_RootLocalesArgs = {
  distinct_on?: InputMaybe<Array<Locales_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Locales_Order_By>>;
  where?: InputMaybe<Locales_Bool_Exp>;
};


export type Subscription_RootLocales_By_PkArgs = {
  code: Scalars['String']['input'];
};


export type Subscription_RootLocales_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Locales_Stream_Cursor_Input>>;
  where?: InputMaybe<Locales_Bool_Exp>;
};


export type Subscription_RootModel_CapabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Model_Capabilities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Model_Capabilities_Order_By>>;
  where?: InputMaybe<Model_Capabilities_Bool_Exp>;
};


export type Subscription_RootModel_Capabilities_By_PkArgs = {
  capability_slug: Scalars['String']['input'];
  model_slug: Scalars['String']['input'];
};


export type Subscription_RootModel_Capabilities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Model_Capabilities_Stream_Cursor_Input>>;
  where?: InputMaybe<Model_Capabilities_Bool_Exp>;
};


export type Subscription_RootModel_TranslationsArgs = {
  distinct_on?: InputMaybe<Array<Model_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Model_Translations_Order_By>>;
  where?: InputMaybe<Model_Translations_Bool_Exp>;
};


export type Subscription_RootModel_Translations_By_PkArgs = {
  locale: Scalars['String']['input'];
  model_slug: Scalars['String']['input'];
};


export type Subscription_RootModel_Translations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Model_Translations_Stream_Cursor_Input>>;
  where?: InputMaybe<Model_Translations_Bool_Exp>;
};


export type Subscription_RootModelsArgs = {
  distinct_on?: InputMaybe<Array<Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Models_Order_By>>;
  where?: InputMaybe<Models_Bool_Exp>;
};


export type Subscription_RootModels_By_PkArgs = {
  slug: Scalars['String']['input'];
};


export type Subscription_RootModels_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Models_Stream_Cursor_Input>>;
  where?: InputMaybe<Models_Bool_Exp>;
};


export type Subscription_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNotifications_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notifications_Stream_Cursor_Input>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootPersonal_Access_TokensArgs = {
  distinct_on?: InputMaybe<Array<Personal_Access_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personal_Access_Tokens_Order_By>>;
  where?: InputMaybe<Personal_Access_Tokens_Bool_Exp>;
};


export type Subscription_RootPersonal_Access_Tokens_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPersonal_Access_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Personal_Access_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Personal_Access_Tokens_Bool_Exp>;
};


export type Subscription_RootPipeline_ExamplesArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Examples_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Examples_Order_By>>;
  where?: InputMaybe<Pipeline_Examples_Bool_Exp>;
};


export type Subscription_RootPipeline_Examples_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPipeline_Examples_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pipeline_Examples_Stream_Cursor_Input>>;
  where?: InputMaybe<Pipeline_Examples_Bool_Exp>;
};


export type Subscription_RootPipeline_Examples_TranslationsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Examples_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Examples_Translations_Order_By>>;
  where?: InputMaybe<Pipeline_Examples_Translations_Bool_Exp>;
};


export type Subscription_RootPipeline_Examples_Translations_By_PkArgs = {
  example_id: Scalars['uuid']['input'];
  locale: Scalars['String']['input'];
};


export type Subscription_RootPipeline_Examples_Translations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pipeline_Examples_Translations_Stream_Cursor_Input>>;
  where?: InputMaybe<Pipeline_Examples_Translations_Bool_Exp>;
};


export type Subscription_RootPipeline_ModelsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Models_Order_By>>;
  where?: InputMaybe<Pipeline_Models_Bool_Exp>;
};


export type Subscription_RootPipeline_Models_By_PkArgs = {
  model_slug: Scalars['String']['input'];
  pipeline_slug: Scalars['String']['input'];
};


export type Subscription_RootPipeline_Models_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pipeline_Models_Stream_Cursor_Input>>;
  where?: InputMaybe<Pipeline_Models_Bool_Exp>;
};


export type Subscription_RootPipeline_RunsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Runs_Order_By>>;
  where?: InputMaybe<Pipeline_Runs_Bool_Exp>;
};


export type Subscription_RootPipeline_Runs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Runs_Order_By>>;
  where?: InputMaybe<Pipeline_Runs_Bool_Exp>;
};


export type Subscription_RootPipeline_Runs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPipeline_Runs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pipeline_Runs_Stream_Cursor_Input>>;
  where?: InputMaybe<Pipeline_Runs_Bool_Exp>;
};


export type Subscription_RootPipeline_TranslationsArgs = {
  distinct_on?: InputMaybe<Array<Pipeline_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipeline_Translations_Order_By>>;
  where?: InputMaybe<Pipeline_Translations_Bool_Exp>;
};


export type Subscription_RootPipeline_Translations_By_PkArgs = {
  locale: Scalars['String']['input'];
  pipeline_id: Scalars['uuid']['input'];
};


export type Subscription_RootPipeline_Translations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pipeline_Translations_Stream_Cursor_Input>>;
  where?: InputMaybe<Pipeline_Translations_Bool_Exp>;
};


export type Subscription_RootPipelinesArgs = {
  distinct_on?: InputMaybe<Array<Pipelines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pipelines_Order_By>>;
  where?: InputMaybe<Pipelines_Bool_Exp>;
};


export type Subscription_RootPipelines_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPipelines_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pipelines_Stream_Cursor_Input>>;
  where?: InputMaybe<Pipelines_Bool_Exp>;
};


export type Subscription_RootPlan_TranslationsArgs = {
  distinct_on?: InputMaybe<Array<Plan_Translations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Translations_Order_By>>;
  where?: InputMaybe<Plan_Translations_Bool_Exp>;
};


export type Subscription_RootPlan_Translations_By_PkArgs = {
  locale: Scalars['String']['input'];
  plan_id: Scalars['uuid']['input'];
};


export type Subscription_RootPlan_Translations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Plan_Translations_Stream_Cursor_Input>>;
  where?: InputMaybe<Plan_Translations_Bool_Exp>;
};


export type Subscription_RootPlan_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Plan_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plan_Versions_Order_By>>;
  where?: InputMaybe<Plan_Versions_Bool_Exp>;
};


export type Subscription_RootPlan_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlan_Versions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Plan_Versions_Stream_Cursor_Input>>;
  where?: InputMaybe<Plan_Versions_Bool_Exp>;
};


export type Subscription_RootPlansArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootPlans_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlans_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Plans_Stream_Cursor_Input>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Subscription_RootProviders_By_PkArgs = {
  slug: Scalars['String']['input'];
};


export type Subscription_RootProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Providers_Stream_Cursor_Input>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};


export type Subscription_RootSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscriptions_Order_By>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};


export type Subscription_RootSubscriptions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSubscriptions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subscriptions_Stream_Cursor_Input>>;
  where?: InputMaybe<Subscriptions_Bool_Exp>;
};

/** columns and relationships of "subscriptions" */
export type Subscriptions = {
  __typename?: 'subscriptions';
  cancel_at_period_end: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  period_end: Scalars['timestamptz']['output'];
  period_start: Scalars['timestamptz']['output'];
  /** An object relationship */
  plan: Plans;
  plan_id: Scalars['uuid']['output'];
  /** An object relationship */
  plan_version: Plan_Versions;
  plan_version_id: Scalars['uuid']['output'];
  status: Scalars['String']['output'];
};

/** order by aggregate values of table "subscriptions" */
export type Subscriptions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subscriptions_Max_Order_By>;
  min?: InputMaybe<Subscriptions_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "subscriptions". All fields are combined with a logical 'AND'. */
export type Subscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Subscriptions_Bool_Exp>>;
  _not?: InputMaybe<Subscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Subscriptions_Bool_Exp>>;
  cancel_at_period_end?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  period_end?: InputMaybe<Timestamptz_Comparison_Exp>;
  period_start?: InputMaybe<Timestamptz_Comparison_Exp>;
  plan?: InputMaybe<Plans_Bool_Exp>;
  plan_id?: InputMaybe<Uuid_Comparison_Exp>;
  plan_version?: InputMaybe<Plan_Versions_Bool_Exp>;
  plan_version_id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "subscriptions" */
export type Subscriptions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  period_end?: InputMaybe<Order_By>;
  period_start?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  plan_version_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "subscriptions" */
export type Subscriptions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  period_end?: InputMaybe<Order_By>;
  period_start?: InputMaybe<Order_By>;
  plan_id?: InputMaybe<Order_By>;
  plan_version_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "subscriptions". */
export type Subscriptions_Order_By = {
  cancel_at_period_end?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  period_end?: InputMaybe<Order_By>;
  period_start?: InputMaybe<Order_By>;
  plan?: InputMaybe<Plans_Order_By>;
  plan_id?: InputMaybe<Order_By>;
  plan_version?: InputMaybe<Plan_Versions_Order_By>;
  plan_version_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** select columns of table "subscriptions" */
export enum Subscriptions_Select_Column {
  /** column name */
  CancelAtPeriodEnd = 'cancel_at_period_end',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PeriodEnd = 'period_end',
  /** column name */
  PeriodStart = 'period_start',
  /** column name */
  PlanId = 'plan_id',
  /** column name */
  PlanVersionId = 'plan_version_id',
  /** column name */
  Status = 'status'
}

/** Streaming cursor of the table "subscriptions" */
export type Subscriptions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subscriptions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subscriptions_Stream_Cursor_Value_Input = {
  cancel_at_period_end?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  period_end?: InputMaybe<Scalars['timestamptz']['input']>;
  period_start?: InputMaybe<Scalars['timestamptz']['input']>;
  plan_id?: InputMaybe<Scalars['uuid']['input']>;
  plan_version_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type ChangePasswordMutationVariables = Exact<{
  current_password: Scalars['String']['input'];
  new_password: Scalars['String']['input'];
}>;


export type ChangePasswordMutation = { __typename?: 'mutation_root', change_password: { __typename?: 'change_password_output', success: boolean, message: string } };

export type ChangeNameMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type ChangeNameMutation = { __typename?: 'mutation_root', change_name: { __typename?: 'change_name_output', success: boolean, message: string, name: string } };

export type CancelSubscriptionMutationVariables = Exact<{ [key: string]: never; }>;


export type CancelSubscriptionMutation = { __typename?: 'mutation_root', cancel_subscription: { __typename?: 'cancel_subscription_output', success: boolean, message: string, cancel_at_period_end: boolean } };

export type RequestAvatarUploadMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  content_type: Scalars['String']['input'];
}>;


export type RequestAvatarUploadMutation = { __typename?: 'mutation_root', request_avatar_upload: { __typename?: 'request_avatar_upload_output', success: boolean, upload_url: string, asset_url: string, key: string, max_size: number } };

export type ChangeAvatarMutationVariables = Exact<{
  avatar_url: Scalars['String']['input'];
}>;


export type ChangeAvatarMutation = { __typename?: 'mutation_root', change_avatar: { __typename?: 'change_avatar_output', success: boolean, message: string, avatar_url: string } };

export type RequestAccountDeletionMutationVariables = Exact<{ [key: string]: never; }>;


export type RequestAccountDeletionMutation = { __typename?: 'mutation_root', request_account_deletion: { __typename?: 'request_account_deletion_output', success: boolean, message: string, expires_at: string } };

export type ConfirmAccountDeletionMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type ConfirmAccountDeletionMutation = { __typename?: 'mutation_root', confirm_account_deletion: { __typename?: 'confirm_account_deletion_output', success: boolean, message: string, effective_at: string } };

export type CancelAccountDeletionMutationVariables = Exact<{ [key: string]: never; }>;


export type CancelAccountDeletionMutation = { __typename?: 'mutation_root', cancel_account_deletion: { __typename?: 'cancel_account_deletion_output', success: boolean, message: string } };

export type GetMyAffiliateCodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyAffiliateCodesQuery = { __typename?: 'query_root', affiliate_codes: Array<{ __typename?: 'affiliate_codes', id: any, code: string, is_primary?: boolean | null, redirect_path?: string | null, created_at?: any | null }> };

export type GetMyAffiliateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyAffiliateQuery = { __typename?: 'query_root', affiliates: Array<{ __typename?: 'affiliates', id: any, whop_affiliate_id?: string | null, commission_percent?: number | null, is_active?: boolean | null, codes: Array<{ __typename?: 'affiliate_codes', id: any, code: string, is_primary?: boolean | null, redirect_path?: string | null, created_at?: any | null }> }> };

export type AddAffiliateCodeMutationVariables = Exact<{
  code: Scalars['String']['input'];
  redirect_path?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddAffiliateCodeMutation = { __typename?: 'mutation_root', add_affiliate_code: { __typename?: 'add_affiliate_code_output', success: boolean, code_id: string } };

export type EnsureAffiliateMutationVariables = Exact<{ [key: string]: never; }>;


export type EnsureAffiliateMutation = { __typename?: 'mutation_root', ensure_affiliate: { __typename?: 'ensure_affiliate_output', success: boolean, affiliate_id: string } };

export type GetMyReferralsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyReferralsQuery = { __typename?: 'query_root', get_my_referrals: { __typename?: 'get_my_referrals_output', total_referrals: number, active_referrals: number, total_commission_cents: number, referrals: Array<{ __typename?: 'referral_entry', user_id: string, email: string, name: string, signed_up_at: string, subscription_status: string, plan_name: string, commission_cents: number }> } };

export type GetMyStorageUsageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyStorageUsageQuery = { __typename?: 'query_root', assets_aggregate: { __typename?: 'assets_aggregate', aggregate?: { __typename?: 'assets_aggregate_fields', count: number, sum?: { __typename?: 'assets_sum_fields', size_bytes?: any | null } | null } | null } };

export type GetAssetThumbnailQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetAssetThumbnailQuery = { __typename?: 'query_root', assets_by_pk?: { __typename?: 'assets', id: any, type: string, url: string, thumbnail_url?: string | null, preview_frames?: Array<string> | null } | null };

export type GetAssetThumbnailsByIdsQueryVariables = Exact<{
  ids: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
}>;


export type GetAssetThumbnailsByIdsQuery = { __typename?: 'query_root', assets: Array<{ __typename?: 'assets', id: any, type: string, url: string, thumbnail_url?: string | null, preview_frames?: Array<string> | null }> };

export type GetUserAssetsQueryVariables = Exact<{
  where?: InputMaybe<Assets_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUserAssetsQuery = { __typename?: 'query_root', assets: Array<{ __typename?: 'assets', id: any, type: string, url: string, thumbnail_url?: string | null, preview_frames?: Array<string> | null, metadata?: any | null, tags: Array<string>, created_at: any, pipeline_run_id?: any | null }>, assets_aggregate: { __typename?: 'assets_aggregate', aggregate?: { __typename?: 'assets_aggregate_fields', count: number } | null } };

export type RequestUploadMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  content_type: Scalars['String']['input'];
}>;


export type RequestUploadMutation = { __typename?: 'mutation_root', request_upload: { __typename?: 'request_upload_output', upload_url: string, asset_url: string, key: string } };

export type RequestMultipartUploadMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  content_type: Scalars['String']['input'];
  total_size: Scalars['bigint']['input'];
  part_size?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type RequestMultipartUploadMutation = { __typename?: 'mutation_root', request_multipart_upload: { __typename?: 'request_multipart_upload_output', upload_id: string, key: string, asset_url: string, part_size: any, part_urls: Array<{ __typename?: 'multipart_part_url', part_number: number, url: string }> } };

export type CompleteMultipartUploadMutationVariables = Exact<{
  upload_id: Scalars['String']['input'];
  key: Scalars['String']['input'];
  content_type: Scalars['String']['input'];
  parts: Array<Multipart_Part_Input> | Multipart_Part_Input;
  tags?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type CompleteMultipartUploadMutation = { __typename?: 'mutation_root', complete_multipart_upload: { __typename?: 'create_asset_output', id: string, type: string, url: string, tags: Array<string>, created_at: string } };

export type AbortMultipartUploadMutationVariables = Exact<{
  upload_id: Scalars['String']['input'];
  key: Scalars['String']['input'];
}>;


export type AbortMultipartUploadMutation = { __typename?: 'mutation_root', abort_multipart_upload: { __typename?: 'abort_multipart_upload_output', success: boolean } };

export type CreateAssetMutationVariables = Exact<{
  key: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type CreateAssetMutation = { __typename?: 'mutation_root', create_asset: { __typename?: 'create_asset_output', id: string, type: string, url: string, tags: Array<string>, created_at: string } };

export type DeleteAssetActionMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteAssetActionMutation = { __typename?: 'mutation_root', delete_asset: { __typename?: 'delete_asset_output', success: boolean } };

export type UpdateAssetTagsMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  tags: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type UpdateAssetTagsMutation = { __typename?: 'mutation_root', update_assets_by_pk?: { __typename?: 'assets', id: any, tags: Array<string> } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  referral_code?: InputMaybe<Scalars['String']['input']>;
}>;


export type LoginMutation = { __typename?: 'mutation_root', login: { __typename?: 'auth_result', success: boolean, message: string, token?: string | null, affiliate_id?: string | null } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  name: Scalars['String']['input'];
  referral_code?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegisterMutation = { __typename?: 'mutation_root', register: { __typename?: 'auth_result', success: boolean, message: string, token?: string | null, affiliate_id?: string | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'mutation_root', logout: { __typename?: 'logout_output', success: boolean } };

export type InitVerificationFlowMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type InitVerificationFlowMutation = { __typename?: 'mutation_root', init_verification_flow: { __typename?: 'auth_flow', id: string, csrf_token: string } };

export type SubmitVerificationCodeMutationVariables = Exact<{
  flowId: Scalars['String']['input'];
  code: Scalars['String']['input'];
  csrf_token: Scalars['String']['input'];
}>;


export type SubmitVerificationCodeMutation = { __typename?: 'mutation_root', submit_verification_code: { __typename?: 'auth_result', success: boolean, message: string } };

export type RequestPasswordResetMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type RequestPasswordResetMutation = { __typename?: 'mutation_root', request_password_reset: { __typename?: 'auth_result', success: boolean, message: string } };

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  code: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'mutation_root', reset_password: { __typename?: 'auth_result', success: boolean, message: string } };

export type GetCreditBalanceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCreditBalanceQuery = { __typename?: 'query_root', get_credit_balance?: { __typename?: 'credit_balance_output', balance: number, reserved: number, available: number } | null };

export type GetCreditHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCreditHistoryQuery = { __typename?: 'query_root', get_credit_history: Array<{ __typename?: 'credit_history_entry', type: string, amount: number, description: string, created_at: string, pipeline_run_id?: string | null, pipeline_slug?: string | null, pipeline_name?: string | null, status?: string | null, reservation_mc?: number | null }> };

export type ModelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ModelsQuery = { __typename?: 'query_root', models: Array<{ __typename?: 'models', slug: string, provider: string, label: string, public_name?: string | null, aliases: Array<string>, description: string, long_description?: string | null, featured: boolean, sort_order: number, provider_info: { __typename?: 'providers', label?: string | null }, capabilities: Array<{ __typename?: 'model_capabilities', capability_slug: string }>, pipeline_models: Array<{ __typename?: 'pipeline_models', pipeline_slug: string, sort_order: number }>, translations: Array<{ __typename?: 'model_translations', locale: string, description?: string | null, long_description?: string | null }> }> };

export type GetNotificationsQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type GetNotificationsQuery = { __typename?: 'query_root', notifications: Array<{ __typename?: 'notifications', id: any, type: string, title: string, body?: string | null, metadata?: any | null, read: boolean, created_at: any }>, unread: { __typename?: 'notifications_aggregate', aggregate?: { __typename?: 'notifications_aggregate_fields', count: number } | null } };

export type MarkNotificationReadMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type MarkNotificationReadMutation = { __typename?: 'mutation_root', update_notifications_by_pk?: { __typename?: 'notifications', id: any, read: boolean } | null };

export type MarkAllNotificationsReadMutationVariables = Exact<{ [key: string]: never; }>;


export type MarkAllNotificationsReadMutation = { __typename?: 'mutation_root', update_notifications?: { __typename?: 'notifications_mutation_response', affected_rows: number } | null };

export type GetPipelinesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPipelinesQuery = { __typename?: 'query_root', pipelines: Array<{ __typename?: 'pipelines', id: any, slug: string, name: string, description?: string | null, category: string, icon_url?: string | null, preview_url?: string | null, providers: Array<string>, models: Array<string>, input_schema: any, ui_schema: any, output_schema: any, seo_content?: string | null, seo_faq?: any | null, tags: Array<string>, hints: any, cancellable: boolean, translations: Array<{ __typename?: 'pipeline_translations', locale: string, name?: string | null, description?: string | null, seo_content?: string | null, seo_faq?: any | null, hints?: any | null, form_i18n?: any | null }>, examples: Array<{ __typename?: 'pipeline_examples', id: any, title: string, caption?: string | null, output_url?: string | null, output_kind: string, input_url?: string | null, input_kind?: string | null, content?: string | null, inputs?: any | null, thumbnail_url?: string | null, model_slug?: string | null, model?: { __typename?: 'models', slug: string, label: string } | null, translations: Array<{ __typename?: 'pipeline_examples_translations', locale: string, title?: string | null, caption?: string | null }> }> }> };

export type GetPipelinesListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPipelinesListQuery = { __typename?: 'query_root', pipelines: Array<{ __typename?: 'pipelines', id: any, slug: string, name: string, description?: string | null, category: string, icon_url?: string | null, preview_url?: string | null, providers: Array<string>, models: Array<string>, tags: Array<string>, hints: any, cancellable: boolean }> };

export type EstimatePipelineCostQueryVariables = Exact<{
  pipeline_slug: Scalars['String']['input'];
  input: Scalars['jsonb']['input'];
}>;


export type EstimatePipelineCostQuery = { __typename?: 'query_root', estimate_pipeline_cost?: { __typename?: 'estimate_pipeline_cost_output', pipeline_slug: string, reservation_mc: number, estimated_mc: number, is_metered: boolean, routed_model?: string | null, routed_reason_code?: string | null, routed_reason_params?: any | null, incompatible_models?: any | null, engine_caps?: any | null } | null };

export type PipelineModelsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type PipelineModelsQuery = { __typename?: 'query_root', pipeline_models: Array<{ __typename?: 'pipeline_models', model_slug: string, sort_order: number, model: { __typename?: 'models', slug: string, label: string, description: string, provider: string, translations: Array<{ __typename?: 'model_translations', locale: string, description?: string | null }> } }> };

export type PipelinePricingQueryVariables = Exact<{ [key: string]: never; }>;


export type PipelinePricingQuery = { __typename?: 'query_root', pipeline_pricing: Array<{ __typename?: 'pipeline_pricing_row', slug: string, from_mc: number, to_mc?: number | null, metered: boolean }> };

export type RunPipelineMutationVariables = Exact<{
  pipeline_slug: Scalars['String']['input'];
  input: Scalars['jsonb']['input'];
}>;


export type RunPipelineMutation = { __typename?: 'mutation_root', run_pipeline?: { __typename?: 'run_pipeline_output', run_id: string, workflow_id: string } | null };

export type CancelPipelineRunMutationVariables = Exact<{
  run_id: Scalars['String']['input'];
}>;


export type CancelPipelineRunMutation = { __typename?: 'mutation_root', cancel_pipeline_run?: { __typename?: 'cancel_pipeline_run_output', success: boolean } | null };

export type GetPipelineRunQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetPipelineRunQuery = { __typename?: 'query_root', pipeline_runs_by_pk?: { __typename?: 'pipeline_runs', id: any, status: string, input: any, output?: any | null, error_message?: string | null, credits_charged?: number | null, created_at: any, completed_at?: any | null, share_token?: any | null, share_watermark: boolean, pipeline: { __typename?: 'pipelines', name: string, slug: string, output_schema: any, input_schema: any, ui_schema: any, cancellable: boolean }, assets: Array<{ __typename?: 'assets', id: any, type: string, url: string, thumbnail_url?: string | null, created_at: any }>, workflow_execution?: { __typename?: 'executions_visibility', status: number, start_time: any, close_time?: any | null } | null } | null };

export type GetPipelineRunsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Pipeline_Runs_Bool_Exp>;
}>;


export type GetPipelineRunsQuery = { __typename?: 'query_root', pipeline_runs: Array<{ __typename?: 'pipeline_runs', id: any, status: string, input: any, output?: any | null, error_message?: string | null, credits_charged?: number | null, created_at: any, completed_at?: any | null, share_token?: any | null, share_watermark: boolean, pipeline: { __typename?: 'pipelines', name: string, slug: string, output_schema: any, input_schema: any, ui_schema: any, cancellable: boolean }, workflow_execution?: { __typename?: 'executions_visibility', status: number, start_time: any, close_time?: any | null } | null }>, pipeline_runs_aggregate: { __typename?: 'pipeline_runs_aggregate', aggregate?: { __typename?: 'pipeline_runs_aggregate_fields', count: number } | null }, completed: { __typename?: 'pipeline_runs_aggregate', aggregate?: { __typename?: 'pipeline_runs_aggregate_fields', count: number, sum?: { __typename?: 'pipeline_runs_sum_fields', credits_charged?: number | null } | null } | null } };

export type GetPipelineRunsBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPipelineRunsBySlugQuery = { __typename?: 'query_root', pipeline_runs: Array<{ __typename?: 'pipeline_runs', id: any, status: string, input: any, output?: any | null, error_message?: string | null, credits_charged?: number | null, created_at: any, completed_at?: any | null, share_token?: any | null, share_watermark: boolean, pipeline: { __typename?: 'pipelines', name: string, slug: string, output_schema: any, input_schema: any, ui_schema: any, cancellable: boolean }, assets: Array<{ __typename?: 'assets', id: any, type: string, url: string, thumbnail_url?: string | null }>, workflow_execution?: { __typename?: 'executions_visibility', status: number, start_time: any, close_time?: any | null } | null }>, pipeline_runs_aggregate: { __typename?: 'pipeline_runs_aggregate', aggregate?: { __typename?: 'pipeline_runs_aggregate_fields', count: number } | null } };

export type GetActivePipelineRunsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActivePipelineRunsQuery = { __typename?: 'query_root', pipeline_runs: Array<{ __typename?: 'pipeline_runs', id: any, status: string, created_at: any, pipeline: { __typename?: 'pipelines', name: string, slug: string, cancellable: boolean } }>, active_count: { __typename?: 'pipeline_runs_aggregate', aggregate?: { __typename?: 'pipeline_runs_aggregate_fields', count: number } | null } };

export type SetRunShareMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  token?: InputMaybe<Scalars['uuid']['input']>;
  watermark: Scalars['Boolean']['input'];
}>;


export type SetRunShareMutation = { __typename?: 'mutation_root', update_pipeline_runs_by_pk?: { __typename?: 'pipeline_runs', id: any, share_token?: any | null, share_watermark: boolean } | null };

export type GetPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlansQuery = { __typename?: 'query_root', plans: Array<{ __typename?: 'plans', id: any, slug: string, name: string, description?: string | null, features: any, sort_order: number, translations: Array<{ __typename?: 'plan_translations', locale: string, name?: string | null, description?: string | null, features?: any | null }>, versions: Array<{ __typename?: 'plan_versions', id: any, whop_plan_id?: string | null, price_cents: number, monthly_credits: number, max_storage_bytes: any, max_upload_bytes: any }> }> };

export type GetCreditPacksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCreditPacksQuery = { __typename?: 'query_root', credit_packs: Array<{ __typename?: 'credit_packs', id: any, slug: string, name: string, sort_order: number, translations: Array<{ __typename?: 'credit_pack_translations', locale: string, name?: string | null }>, versions: Array<{ __typename?: 'credit_pack_versions', id: any, whop_plan_id?: string | null, price_cents: number, credits: number }> }> };

export type GetSubscriptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubscriptionQuery = { __typename?: 'query_root', subscriptions: Array<{ __typename?: 'subscriptions', id: any, plan_id: any, plan_version_id: any, status: string, period_start: any, period_end: any, cancel_at_period_end: boolean, plan: { __typename?: 'plans', slug: string, name: string, sort_order: number }, plan_version: { __typename?: 'plan_versions', id: any, version: number, monthly_credits: number, price_cents: number, max_storage_bytes: any, max_upload_bytes: any } }> };

export type CreateCheckoutSessionMutationVariables = Exact<{
  whop_plan_id: Scalars['String']['input'];
  affiliate_code?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateCheckoutSessionMutation = { __typename?: 'mutation_root', create_checkout_session: { __typename?: 'create_checkout_session_output', success: boolean, url: string } };

export type WatchPipelineRunSubscriptionVariables = Exact<{
  run_id: Scalars['uuid']['input'];
}>;


export type WatchPipelineRunSubscription = { __typename?: 'subscription_root', pipeline_runs_by_pk?: { __typename?: 'pipeline_runs', id: any, status: string, input: any, output?: any | null, error_message?: string | null, credits_charged?: number | null, created_at: any, completed_at?: any | null, pipeline: { __typename?: 'pipelines', name: string, slug: string, output_schema: any, input_schema: any, ui_schema: any, cancellable: boolean }, assets: Array<{ __typename?: 'assets', id: any, type: string, url: string, thumbnail_url?: string | null }> } | null };

export type WatchActivePipelineRunsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type WatchActivePipelineRunsSubscription = { __typename?: 'subscription_root', pipeline_runs: Array<{ __typename?: 'pipeline_runs', id: any, status: string, created_at: any, pipeline: { __typename?: 'pipelines', name: string, slug: string } }> };

export type WatchNotificationsSubscriptionVariables = Exact<{
  limit: Scalars['Int']['input'];
}>;


export type WatchNotificationsSubscription = { __typename?: 'subscription_root', notifications: Array<{ __typename?: 'notifications', id: any, type: string, title: string, body?: string | null, metadata?: any | null, read: boolean, created_at: any }> };

export type GetMyApiKeysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyApiKeysQuery = { __typename?: 'query_root', personal_access_tokens: Array<{ __typename?: 'personal_access_tokens', id: any, name: string, scopes: Array<string>, last_used_at?: any | null, created_at: any, expires_at: any, revoked_at?: any | null }> };

export type CreatePersonalAccessTokenMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreatePersonalAccessTokenMutation = { __typename?: 'mutation_root', create_personal_access_token: { __typename?: 'create_personal_access_token_output', success: boolean, id: string, token: string, jti: string, expires_at: string } };

export type RevokePersonalAccessTokenMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type RevokePersonalAccessTokenMutation = { __typename?: 'mutation_root', revoke_personal_access_token: { __typename?: 'revoke_personal_access_token_output', success: boolean, revoked_at: string } };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'query_root', current_user: { __typename?: 'current_user_output', id: string, email: string, name: string, email_verified: boolean, avatar_url?: string | null, deletion_scheduled_at?: string | null, deletion_effective_at?: string | null } };


export const ChangePasswordDocument = gql`
    mutation ChangePassword($current_password: String!, $new_password: String!) {
  change_password(
    current_password: $current_password
    new_password: $new_password
  ) {
    success
    message
  }
}
    `;
export const ChangeNameDocument = gql`
    mutation ChangeName($name: String!) {
  change_name(name: $name) {
    success
    message
    name
  }
}
    `;
export const CancelSubscriptionDocument = gql`
    mutation CancelSubscription {
  cancel_subscription {
    success
    message
    cancel_at_period_end
  }
}
    `;
export const RequestAvatarUploadDocument = gql`
    mutation RequestAvatarUpload($filename: String!, $content_type: String!) {
  request_avatar_upload(filename: $filename, content_type: $content_type) {
    success
    upload_url
    asset_url
    key
    max_size
  }
}
    `;
export const ChangeAvatarDocument = gql`
    mutation ChangeAvatar($avatar_url: String!) {
  change_avatar(avatar_url: $avatar_url) {
    success
    message
    avatar_url
  }
}
    `;
export const RequestAccountDeletionDocument = gql`
    mutation RequestAccountDeletion {
  request_account_deletion {
    success
    message
    expires_at
  }
}
    `;
export const ConfirmAccountDeletionDocument = gql`
    mutation ConfirmAccountDeletion($token: String!) {
  confirm_account_deletion(token: $token) {
    success
    message
    effective_at
  }
}
    `;
export const CancelAccountDeletionDocument = gql`
    mutation CancelAccountDeletion {
  cancel_account_deletion {
    success
    message
  }
}
    `;
export const GetMyAffiliateCodesDocument = gql`
    query GetMyAffiliateCodes {
  affiliate_codes(order_by: {created_at: desc}) {
    id
    code
    is_primary
    redirect_path
    created_at
  }
}
    `;
export const GetMyAffiliateDocument = gql`
    query GetMyAffiliate {
  affiliates(limit: 1) {
    id
    whop_affiliate_id
    commission_percent
    is_active
    codes(order_by: {created_at: desc}) {
      id
      code
      is_primary
      redirect_path
      created_at
    }
  }
}
    `;
export const AddAffiliateCodeDocument = gql`
    mutation AddAffiliateCode($code: String!, $redirect_path: String) {
  add_affiliate_code(code: $code, redirect_path: $redirect_path) {
    success
    code_id
  }
}
    `;
export const EnsureAffiliateDocument = gql`
    mutation EnsureAffiliate {
  ensure_affiliate {
    success
    affiliate_id
  }
}
    `;
export const GetMyReferralsDocument = gql`
    query GetMyReferrals {
  get_my_referrals {
    total_referrals
    active_referrals
    total_commission_cents
    referrals {
      user_id
      email
      name
      signed_up_at
      subscription_status
      plan_name
      commission_cents
    }
  }
}
    `;
export const GetMyStorageUsageDocument = gql`
    query GetMyStorageUsage {
  assets_aggregate {
    aggregate {
      sum {
        size_bytes
      }
      count
    }
  }
}
    `;
export const GetAssetThumbnailDocument = gql`
    query GetAssetThumbnail($id: uuid!) {
  assets_by_pk(id: $id) {
    id
    type
    url
    thumbnail_url
    preview_frames
  }
}
    `;
export const GetAssetThumbnailsByIdsDocument = gql`
    query GetAssetThumbnailsByIds($ids: [uuid!]!) {
  assets(where: {id: {_in: $ids}}) {
    id
    type
    url
    thumbnail_url
    preview_frames
  }
}
    `;
export const GetUserAssetsDocument = gql`
    query GetUserAssets($where: assets_bool_exp = {}, $limit: Int = 20, $offset: Int = 0) {
  assets(
    where: $where
    order_by: {created_at: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    type
    url
    thumbnail_url
    preview_frames
    metadata
    tags
    created_at
    pipeline_run_id
  }
  assets_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    `;
export const RequestUploadDocument = gql`
    mutation RequestUpload($filename: String!, $content_type: String!) {
  request_upload(filename: $filename, content_type: $content_type) {
    upload_url
    asset_url
    key
  }
}
    `;
export const RequestMultipartUploadDocument = gql`
    mutation RequestMultipartUpload($filename: String!, $content_type: String!, $total_size: bigint!, $part_size: bigint) {
  request_multipart_upload(
    filename: $filename
    content_type: $content_type
    total_size: $total_size
    part_size: $part_size
  ) {
    upload_id
    key
    asset_url
    part_size
    part_urls {
      part_number
      url
    }
  }
}
    `;
export const CompleteMultipartUploadDocument = gql`
    mutation CompleteMultipartUpload($upload_id: String!, $key: String!, $content_type: String!, $parts: [multipart_part_input!]!, $tags: [String!] = []) {
  complete_multipart_upload(
    upload_id: $upload_id
    key: $key
    content_type: $content_type
    parts: $parts
    tags: $tags
  ) {
    id
    type
    url
    tags
    created_at
  }
}
    `;
export const AbortMultipartUploadDocument = gql`
    mutation AbortMultipartUpload($upload_id: String!, $key: String!) {
  abort_multipart_upload(upload_id: $upload_id, key: $key) {
    success
  }
}
    `;
export const CreateAssetDocument = gql`
    mutation CreateAsset($key: String!, $tags: [String!] = []) {
  create_asset(key: $key, tags: $tags) {
    id
    type
    url
    tags
    created_at
  }
}
    `;
export const DeleteAssetActionDocument = gql`
    mutation DeleteAssetAction($id: uuid!) {
  delete_asset(id: $id) {
    success
  }
}
    `;
export const UpdateAssetTagsDocument = gql`
    mutation UpdateAssetTags($id: uuid!, $tags: [String!]!) {
  update_assets_by_pk(pk_columns: {id: $id}, _set: {tags: $tags}) {
    id
    tags
  }
}
    `;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!, $referral_code: String) {
  login(email: $email, password: $password, referral_code: $referral_code) {
    success
    message
    token
    affiliate_id
  }
}
    `;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $name: String!, $referral_code: String) {
  register(
    email: $email
    password: $password
    name: $name
    referral_code: $referral_code
  ) {
    success
    message
    token
    affiliate_id
  }
}
    `;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    success
  }
}
    `;
export const InitVerificationFlowDocument = gql`
    mutation InitVerificationFlow($email: String, $force: Boolean) {
  init_verification_flow(email: $email, force: $force) {
    id
    csrf_token
  }
}
    `;
export const SubmitVerificationCodeDocument = gql`
    mutation SubmitVerificationCode($flowId: String!, $code: String!, $csrf_token: String!) {
  submit_verification_code(flowId: $flowId, code: $code, csrf_token: $csrf_token) {
    success
    message
  }
}
    `;
export const RequestPasswordResetDocument = gql`
    mutation RequestPasswordReset($email: String!) {
  request_password_reset(email: $email) {
    success
    message
  }
}
    `;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($email: String!, $code: String!, $newPassword: String!) {
  reset_password(email: $email, code: $code, newPassword: $newPassword) {
    success
    message
  }
}
    `;
export const GetCreditBalanceDocument = gql`
    query GetCreditBalance {
  get_credit_balance {
    balance
    reserved
    available
  }
}
    `;
export const GetCreditHistoryDocument = gql`
    query GetCreditHistory {
  get_credit_history {
    type
    amount
    description
    created_at
    pipeline_run_id
    pipeline_slug
    pipeline_name
    status
    reservation_mc
  }
}
    `;
export const ModelsDocument = gql`
    query Models {
  models(order_by: {sort_order: asc, slug: asc}) {
    slug
    provider
    label
    public_name
    aliases
    provider_info {
      label
    }
    description
    long_description
    featured
    sort_order
    capabilities {
      capability_slug
    }
    pipeline_models(order_by: {sort_order: asc}) {
      pipeline_slug
      sort_order
    }
    translations {
      locale
      description
      long_description
    }
  }
}
    `;
export const GetNotificationsDocument = gql`
    query GetNotifications($limit: Int!, $offset: Int!) {
  notifications(order_by: {created_at: desc}, limit: $limit, offset: $offset) {
    id
    type
    title
    body
    metadata
    read
    created_at
  }
  unread: notifications_aggregate(where: {read: {_eq: false}}) {
    aggregate {
      count
    }
  }
}
    `;
export const MarkNotificationReadDocument = gql`
    mutation MarkNotificationRead($id: uuid!) {
  update_notifications_by_pk(pk_columns: {id: $id}, _set: {read: true}) {
    id
    read
  }
}
    `;
export const MarkAllNotificationsReadDocument = gql`
    mutation MarkAllNotificationsRead {
  update_notifications(where: {read: {_eq: false}}, _set: {read: true}) {
    affected_rows
  }
}
    `;
export const GetPipelinesDocument = gql`
    query GetPipelines {
  pipelines(where: {is_active: {_eq: true}}, order_by: {sort_order: asc}) {
    id
    slug
    name
    description
    category
    icon_url
    preview_url
    providers
    models
    input_schema
    ui_schema
    output_schema
    seo_content
    seo_faq
    tags
    hints
    cancellable
    translations {
      locale
      name
      description
      seo_content
      seo_faq
      hints
      form_i18n
    }
    examples(order_by: [{sort_order: asc}, {created_at: asc}]) {
      id
      title
      caption
      output_url
      output_kind
      input_url
      input_kind
      content
      inputs
      thumbnail_url
      model_slug
      model {
        slug
        label
      }
      translations {
        locale
        title
        caption
      }
    }
  }
}
    `;
export const GetPipelinesListDocument = gql`
    query GetPipelinesList($limit: Int = 20, $offset: Int = 0) {
  pipelines(
    where: {is_active: {_eq: true}}
    order_by: {sort_order: asc}
    limit: $limit
    offset: $offset
  ) {
    id
    slug
    name
    description
    category
    icon_url
    preview_url
    providers
    models
    tags
    hints
    cancellable
  }
}
    `;
export const EstimatePipelineCostDocument = gql`
    query EstimatePipelineCost($pipeline_slug: String!, $input: jsonb!) {
  estimate_pipeline_cost(pipeline_slug: $pipeline_slug, input: $input) {
    pipeline_slug
    reservation_mc
    estimated_mc
    is_metered
    routed_model
    routed_reason_code
    routed_reason_params
    incompatible_models
    engine_caps
  }
}
    `;
export const PipelineModelsDocument = gql`
    query PipelineModels($slug: String!) {
  pipeline_models(
    where: {pipeline_slug: {_eq: $slug}}
    order_by: {sort_order: asc}
  ) {
    model_slug
    sort_order
    model {
      slug
      label
      description
      provider
      translations {
        locale
        description
      }
    }
  }
}
    `;
export const PipelinePricingDocument = gql`
    query PipelinePricing {
  pipeline_pricing {
    slug
    from_mc
    to_mc
    metered
  }
}
    `;
export const RunPipelineDocument = gql`
    mutation RunPipeline($pipeline_slug: String!, $input: jsonb!) {
  run_pipeline(pipeline_slug: $pipeline_slug, input: $input) {
    run_id
    workflow_id
  }
}
    `;
export const CancelPipelineRunDocument = gql`
    mutation CancelPipelineRun($run_id: String!) {
  cancel_pipeline_run(run_id: $run_id) {
    success
  }
}
    `;
export const GetPipelineRunDocument = gql`
    query GetPipelineRun($id: uuid!) {
  pipeline_runs_by_pk(id: $id) {
    id
    status
    input
    output
    error_message
    credits_charged
    created_at
    completed_at
    share_token
    share_watermark
    pipeline {
      name
      slug
      output_schema
      input_schema
      ui_schema
      cancellable
    }
    assets {
      id
      type
      url
      thumbnail_url
      created_at
    }
    workflow_execution {
      status
      start_time
      close_time
    }
  }
}
    `;
export const GetPipelineRunsDocument = gql`
    query GetPipelineRuns($limit: Int = 12, $offset: Int = 0, $where: pipeline_runs_bool_exp = {}) {
  pipeline_runs(
    order_by: {created_at: desc}
    limit: $limit
    offset: $offset
    where: $where
  ) {
    id
    pipeline {
      name
      slug
      output_schema
      input_schema
      ui_schema
      cancellable
    }
    status
    input
    output
    error_message
    credits_charged
    created_at
    completed_at
    share_token
    share_watermark
    workflow_execution {
      status
      start_time
      close_time
    }
  }
  pipeline_runs_aggregate(where: $where) {
    aggregate {
      count
    }
  }
  completed: pipeline_runs_aggregate(
    where: {_and: [$where, {status: {_eq: "completed"}}]}
  ) {
    aggregate {
      count
      sum {
        credits_charged
      }
    }
  }
}
    `;
export const GetPipelineRunsBySlugDocument = gql`
    query GetPipelineRunsBySlug($slug: String!, $limit: Int = 10, $offset: Int = 0) {
  pipeline_runs(
    where: {pipeline: {slug: {_eq: $slug}}}
    order_by: {created_at: desc}
    limit: $limit
    offset: $offset
  ) {
    id
    status
    pipeline {
      name
      slug
      output_schema
      input_schema
      ui_schema
      cancellable
    }
    input
    output
    error_message
    credits_charged
    created_at
    completed_at
    share_token
    share_watermark
    assets {
      id
      type
      url
      thumbnail_url
    }
    workflow_execution {
      status
      start_time
      close_time
    }
  }
  pipeline_runs_aggregate(where: {pipeline: {slug: {_eq: $slug}}}) {
    aggregate {
      count
    }
  }
}
    `;
export const GetActivePipelineRunsDocument = gql`
    query GetActivePipelineRuns {
  pipeline_runs(
    where: {status: {_in: ["pending", "running"]}}
    order_by: {created_at: desc}
    limit: 10
  ) {
    id
    status
    created_at
    pipeline {
      name
      slug
      cancellable
    }
  }
  active_count: pipeline_runs_aggregate(
    where: {status: {_in: ["pending", "running"]}}
  ) {
    aggregate {
      count
    }
  }
}
    `;
export const SetRunShareDocument = gql`
    mutation SetRunShare($id: uuid!, $token: uuid, $watermark: Boolean!) {
  update_pipeline_runs_by_pk(
    pk_columns: {id: $id}
    _set: {share_token: $token, share_watermark: $watermark}
  ) {
    id
    share_token
    share_watermark
  }
}
    `;
export const GetPlansDocument = gql`
    query GetPlans {
  plans(order_by: {sort_order: asc}) {
    id
    slug
    name
    description
    features
    sort_order
    translations {
      locale
      name
      description
      features
    }
    versions(where: {is_current: {_eq: true}}, limit: 1) {
      id
      whop_plan_id
      price_cents
      monthly_credits
      max_storage_bytes
      max_upload_bytes
    }
  }
}
    `;
export const GetCreditPacksDocument = gql`
    query GetCreditPacks {
  credit_packs(order_by: {sort_order: asc}) {
    id
    slug
    name
    sort_order
    translations {
      locale
      name
    }
    versions(where: {is_current: {_eq: true}}, limit: 1) {
      id
      whop_plan_id
      price_cents
      credits
    }
  }
}
    `;
export const GetSubscriptionDocument = gql`
    query GetSubscription {
  subscriptions {
    id
    plan_id
    plan_version_id
    status
    period_start
    period_end
    cancel_at_period_end
    plan {
      slug
      name
      sort_order
    }
    plan_version {
      id
      version
      monthly_credits
      price_cents
      max_storage_bytes
      max_upload_bytes
    }
  }
}
    `;
export const CreateCheckoutSessionDocument = gql`
    mutation CreateCheckoutSession($whop_plan_id: String!, $affiliate_code: String) {
  create_checkout_session(
    whop_plan_id: $whop_plan_id
    affiliate_code: $affiliate_code
  ) {
    success
    url
  }
}
    `;
export const WatchPipelineRunDocument = gql`
    subscription WatchPipelineRun($run_id: uuid!) {
  pipeline_runs_by_pk(id: $run_id) {
    id
    status
    input
    output
    error_message
    credits_charged
    created_at
    completed_at
    pipeline {
      name
      slug
      output_schema
      input_schema
      ui_schema
      cancellable
    }
    assets {
      id
      type
      url
      thumbnail_url
    }
  }
}
    `;
export const WatchActivePipelineRunsDocument = gql`
    subscription WatchActivePipelineRuns {
  pipeline_runs(
    where: {status: {_in: ["pending", "running"]}}
    order_by: {created_at: desc}
    limit: 10
  ) {
    id
    status
    created_at
    pipeline {
      name
      slug
    }
  }
}
    `;
export const WatchNotificationsDocument = gql`
    subscription WatchNotifications($limit: Int!) {
  notifications(order_by: {created_at: desc}, limit: $limit) {
    id
    type
    title
    body
    metadata
    read
    created_at
  }
}
    `;
export const GetMyApiKeysDocument = gql`
    query GetMyApiKeys {
  personal_access_tokens(order_by: {created_at: desc}) {
    id
    name
    scopes
    last_used_at
    created_at
    expires_at
    revoked_at
  }
}
    `;
export const CreatePersonalAccessTokenDocument = gql`
    mutation CreatePersonalAccessToken($name: String!) {
  create_personal_access_token(name: $name) {
    success
    id
    token
    jti
    expires_at
  }
}
    `;
export const RevokePersonalAccessTokenDocument = gql`
    mutation RevokePersonalAccessToken($id: uuid!) {
  revoke_personal_access_token(id: $id) {
    success
    revoked_at
  }
}
    `;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  current_user {
    id
    email
    name
    email_verified
    avatar_url
    deletion_scheduled_at
    deletion_effective_at
  }
}
    `;
export type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    ChangePassword(variables: ChangePasswordMutationVariables, options?: C): Promise<ChangePasswordMutation> {
      return requester<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, variables, options) as Promise<ChangePasswordMutation>;
    },
    ChangeName(variables: ChangeNameMutationVariables, options?: C): Promise<ChangeNameMutation> {
      return requester<ChangeNameMutation, ChangeNameMutationVariables>(ChangeNameDocument, variables, options) as Promise<ChangeNameMutation>;
    },
    CancelSubscription(variables?: CancelSubscriptionMutationVariables, options?: C): Promise<CancelSubscriptionMutation> {
      return requester<CancelSubscriptionMutation, CancelSubscriptionMutationVariables>(CancelSubscriptionDocument, variables, options) as Promise<CancelSubscriptionMutation>;
    },
    RequestAvatarUpload(variables: RequestAvatarUploadMutationVariables, options?: C): Promise<RequestAvatarUploadMutation> {
      return requester<RequestAvatarUploadMutation, RequestAvatarUploadMutationVariables>(RequestAvatarUploadDocument, variables, options) as Promise<RequestAvatarUploadMutation>;
    },
    ChangeAvatar(variables: ChangeAvatarMutationVariables, options?: C): Promise<ChangeAvatarMutation> {
      return requester<ChangeAvatarMutation, ChangeAvatarMutationVariables>(ChangeAvatarDocument, variables, options) as Promise<ChangeAvatarMutation>;
    },
    RequestAccountDeletion(variables?: RequestAccountDeletionMutationVariables, options?: C): Promise<RequestAccountDeletionMutation> {
      return requester<RequestAccountDeletionMutation, RequestAccountDeletionMutationVariables>(RequestAccountDeletionDocument, variables, options) as Promise<RequestAccountDeletionMutation>;
    },
    ConfirmAccountDeletion(variables: ConfirmAccountDeletionMutationVariables, options?: C): Promise<ConfirmAccountDeletionMutation> {
      return requester<ConfirmAccountDeletionMutation, ConfirmAccountDeletionMutationVariables>(ConfirmAccountDeletionDocument, variables, options) as Promise<ConfirmAccountDeletionMutation>;
    },
    CancelAccountDeletion(variables?: CancelAccountDeletionMutationVariables, options?: C): Promise<CancelAccountDeletionMutation> {
      return requester<CancelAccountDeletionMutation, CancelAccountDeletionMutationVariables>(CancelAccountDeletionDocument, variables, options) as Promise<CancelAccountDeletionMutation>;
    },
    GetMyAffiliateCodes(variables?: GetMyAffiliateCodesQueryVariables, options?: C): Promise<GetMyAffiliateCodesQuery> {
      return requester<GetMyAffiliateCodesQuery, GetMyAffiliateCodesQueryVariables>(GetMyAffiliateCodesDocument, variables, options) as Promise<GetMyAffiliateCodesQuery>;
    },
    GetMyAffiliate(variables?: GetMyAffiliateQueryVariables, options?: C): Promise<GetMyAffiliateQuery> {
      return requester<GetMyAffiliateQuery, GetMyAffiliateQueryVariables>(GetMyAffiliateDocument, variables, options) as Promise<GetMyAffiliateQuery>;
    },
    AddAffiliateCode(variables: AddAffiliateCodeMutationVariables, options?: C): Promise<AddAffiliateCodeMutation> {
      return requester<AddAffiliateCodeMutation, AddAffiliateCodeMutationVariables>(AddAffiliateCodeDocument, variables, options) as Promise<AddAffiliateCodeMutation>;
    },
    EnsureAffiliate(variables?: EnsureAffiliateMutationVariables, options?: C): Promise<EnsureAffiliateMutation> {
      return requester<EnsureAffiliateMutation, EnsureAffiliateMutationVariables>(EnsureAffiliateDocument, variables, options) as Promise<EnsureAffiliateMutation>;
    },
    GetMyReferrals(variables?: GetMyReferralsQueryVariables, options?: C): Promise<GetMyReferralsQuery> {
      return requester<GetMyReferralsQuery, GetMyReferralsQueryVariables>(GetMyReferralsDocument, variables, options) as Promise<GetMyReferralsQuery>;
    },
    GetMyStorageUsage(variables?: GetMyStorageUsageQueryVariables, options?: C): Promise<GetMyStorageUsageQuery> {
      return requester<GetMyStorageUsageQuery, GetMyStorageUsageQueryVariables>(GetMyStorageUsageDocument, variables, options) as Promise<GetMyStorageUsageQuery>;
    },
    GetAssetThumbnail(variables: GetAssetThumbnailQueryVariables, options?: C): Promise<GetAssetThumbnailQuery> {
      return requester<GetAssetThumbnailQuery, GetAssetThumbnailQueryVariables>(GetAssetThumbnailDocument, variables, options) as Promise<GetAssetThumbnailQuery>;
    },
    GetAssetThumbnailsByIds(variables: GetAssetThumbnailsByIdsQueryVariables, options?: C): Promise<GetAssetThumbnailsByIdsQuery> {
      return requester<GetAssetThumbnailsByIdsQuery, GetAssetThumbnailsByIdsQueryVariables>(GetAssetThumbnailsByIdsDocument, variables, options) as Promise<GetAssetThumbnailsByIdsQuery>;
    },
    GetUserAssets(variables?: GetUserAssetsQueryVariables, options?: C): Promise<GetUserAssetsQuery> {
      return requester<GetUserAssetsQuery, GetUserAssetsQueryVariables>(GetUserAssetsDocument, variables, options) as Promise<GetUserAssetsQuery>;
    },
    RequestUpload(variables: RequestUploadMutationVariables, options?: C): Promise<RequestUploadMutation> {
      return requester<RequestUploadMutation, RequestUploadMutationVariables>(RequestUploadDocument, variables, options) as Promise<RequestUploadMutation>;
    },
    RequestMultipartUpload(variables: RequestMultipartUploadMutationVariables, options?: C): Promise<RequestMultipartUploadMutation> {
      return requester<RequestMultipartUploadMutation, RequestMultipartUploadMutationVariables>(RequestMultipartUploadDocument, variables, options) as Promise<RequestMultipartUploadMutation>;
    },
    CompleteMultipartUpload(variables: CompleteMultipartUploadMutationVariables, options?: C): Promise<CompleteMultipartUploadMutation> {
      return requester<CompleteMultipartUploadMutation, CompleteMultipartUploadMutationVariables>(CompleteMultipartUploadDocument, variables, options) as Promise<CompleteMultipartUploadMutation>;
    },
    AbortMultipartUpload(variables: AbortMultipartUploadMutationVariables, options?: C): Promise<AbortMultipartUploadMutation> {
      return requester<AbortMultipartUploadMutation, AbortMultipartUploadMutationVariables>(AbortMultipartUploadDocument, variables, options) as Promise<AbortMultipartUploadMutation>;
    },
    CreateAsset(variables: CreateAssetMutationVariables, options?: C): Promise<CreateAssetMutation> {
      return requester<CreateAssetMutation, CreateAssetMutationVariables>(CreateAssetDocument, variables, options) as Promise<CreateAssetMutation>;
    },
    DeleteAssetAction(variables: DeleteAssetActionMutationVariables, options?: C): Promise<DeleteAssetActionMutation> {
      return requester<DeleteAssetActionMutation, DeleteAssetActionMutationVariables>(DeleteAssetActionDocument, variables, options) as Promise<DeleteAssetActionMutation>;
    },
    UpdateAssetTags(variables: UpdateAssetTagsMutationVariables, options?: C): Promise<UpdateAssetTagsMutation> {
      return requester<UpdateAssetTagsMutation, UpdateAssetTagsMutationVariables>(UpdateAssetTagsDocument, variables, options) as Promise<UpdateAssetTagsMutation>;
    },
    Login(variables: LoginMutationVariables, options?: C): Promise<LoginMutation> {
      return requester<LoginMutation, LoginMutationVariables>(LoginDocument, variables, options) as Promise<LoginMutation>;
    },
    Register(variables: RegisterMutationVariables, options?: C): Promise<RegisterMutation> {
      return requester<RegisterMutation, RegisterMutationVariables>(RegisterDocument, variables, options) as Promise<RegisterMutation>;
    },
    Logout(variables?: LogoutMutationVariables, options?: C): Promise<LogoutMutation> {
      return requester<LogoutMutation, LogoutMutationVariables>(LogoutDocument, variables, options) as Promise<LogoutMutation>;
    },
    InitVerificationFlow(variables?: InitVerificationFlowMutationVariables, options?: C): Promise<InitVerificationFlowMutation> {
      return requester<InitVerificationFlowMutation, InitVerificationFlowMutationVariables>(InitVerificationFlowDocument, variables, options) as Promise<InitVerificationFlowMutation>;
    },
    SubmitVerificationCode(variables: SubmitVerificationCodeMutationVariables, options?: C): Promise<SubmitVerificationCodeMutation> {
      return requester<SubmitVerificationCodeMutation, SubmitVerificationCodeMutationVariables>(SubmitVerificationCodeDocument, variables, options) as Promise<SubmitVerificationCodeMutation>;
    },
    RequestPasswordReset(variables: RequestPasswordResetMutationVariables, options?: C): Promise<RequestPasswordResetMutation> {
      return requester<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>(RequestPasswordResetDocument, variables, options) as Promise<RequestPasswordResetMutation>;
    },
    ResetPassword(variables: ResetPasswordMutationVariables, options?: C): Promise<ResetPasswordMutation> {
      return requester<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, variables, options) as Promise<ResetPasswordMutation>;
    },
    GetCreditBalance(variables?: GetCreditBalanceQueryVariables, options?: C): Promise<GetCreditBalanceQuery> {
      return requester<GetCreditBalanceQuery, GetCreditBalanceQueryVariables>(GetCreditBalanceDocument, variables, options) as Promise<GetCreditBalanceQuery>;
    },
    GetCreditHistory(variables?: GetCreditHistoryQueryVariables, options?: C): Promise<GetCreditHistoryQuery> {
      return requester<GetCreditHistoryQuery, GetCreditHistoryQueryVariables>(GetCreditHistoryDocument, variables, options) as Promise<GetCreditHistoryQuery>;
    },
    Models(variables?: ModelsQueryVariables, options?: C): Promise<ModelsQuery> {
      return requester<ModelsQuery, ModelsQueryVariables>(ModelsDocument, variables, options) as Promise<ModelsQuery>;
    },
    GetNotifications(variables: GetNotificationsQueryVariables, options?: C): Promise<GetNotificationsQuery> {
      return requester<GetNotificationsQuery, GetNotificationsQueryVariables>(GetNotificationsDocument, variables, options) as Promise<GetNotificationsQuery>;
    },
    MarkNotificationRead(variables: MarkNotificationReadMutationVariables, options?: C): Promise<MarkNotificationReadMutation> {
      return requester<MarkNotificationReadMutation, MarkNotificationReadMutationVariables>(MarkNotificationReadDocument, variables, options) as Promise<MarkNotificationReadMutation>;
    },
    MarkAllNotificationsRead(variables?: MarkAllNotificationsReadMutationVariables, options?: C): Promise<MarkAllNotificationsReadMutation> {
      return requester<MarkAllNotificationsReadMutation, MarkAllNotificationsReadMutationVariables>(MarkAllNotificationsReadDocument, variables, options) as Promise<MarkAllNotificationsReadMutation>;
    },
    GetPipelines(variables?: GetPipelinesQueryVariables, options?: C): Promise<GetPipelinesQuery> {
      return requester<GetPipelinesQuery, GetPipelinesQueryVariables>(GetPipelinesDocument, variables, options) as Promise<GetPipelinesQuery>;
    },
    GetPipelinesList(variables?: GetPipelinesListQueryVariables, options?: C): Promise<GetPipelinesListQuery> {
      return requester<GetPipelinesListQuery, GetPipelinesListQueryVariables>(GetPipelinesListDocument, variables, options) as Promise<GetPipelinesListQuery>;
    },
    EstimatePipelineCost(variables: EstimatePipelineCostQueryVariables, options?: C): Promise<EstimatePipelineCostQuery> {
      return requester<EstimatePipelineCostQuery, EstimatePipelineCostQueryVariables>(EstimatePipelineCostDocument, variables, options) as Promise<EstimatePipelineCostQuery>;
    },
    PipelineModels(variables: PipelineModelsQueryVariables, options?: C): Promise<PipelineModelsQuery> {
      return requester<PipelineModelsQuery, PipelineModelsQueryVariables>(PipelineModelsDocument, variables, options) as Promise<PipelineModelsQuery>;
    },
    PipelinePricing(variables?: PipelinePricingQueryVariables, options?: C): Promise<PipelinePricingQuery> {
      return requester<PipelinePricingQuery, PipelinePricingQueryVariables>(PipelinePricingDocument, variables, options) as Promise<PipelinePricingQuery>;
    },
    RunPipeline(variables: RunPipelineMutationVariables, options?: C): Promise<RunPipelineMutation> {
      return requester<RunPipelineMutation, RunPipelineMutationVariables>(RunPipelineDocument, variables, options) as Promise<RunPipelineMutation>;
    },
    CancelPipelineRun(variables: CancelPipelineRunMutationVariables, options?: C): Promise<CancelPipelineRunMutation> {
      return requester<CancelPipelineRunMutation, CancelPipelineRunMutationVariables>(CancelPipelineRunDocument, variables, options) as Promise<CancelPipelineRunMutation>;
    },
    GetPipelineRun(variables: GetPipelineRunQueryVariables, options?: C): Promise<GetPipelineRunQuery> {
      return requester<GetPipelineRunQuery, GetPipelineRunQueryVariables>(GetPipelineRunDocument, variables, options) as Promise<GetPipelineRunQuery>;
    },
    GetPipelineRuns(variables?: GetPipelineRunsQueryVariables, options?: C): Promise<GetPipelineRunsQuery> {
      return requester<GetPipelineRunsQuery, GetPipelineRunsQueryVariables>(GetPipelineRunsDocument, variables, options) as Promise<GetPipelineRunsQuery>;
    },
    GetPipelineRunsBySlug(variables: GetPipelineRunsBySlugQueryVariables, options?: C): Promise<GetPipelineRunsBySlugQuery> {
      return requester<GetPipelineRunsBySlugQuery, GetPipelineRunsBySlugQueryVariables>(GetPipelineRunsBySlugDocument, variables, options) as Promise<GetPipelineRunsBySlugQuery>;
    },
    GetActivePipelineRuns(variables?: GetActivePipelineRunsQueryVariables, options?: C): Promise<GetActivePipelineRunsQuery> {
      return requester<GetActivePipelineRunsQuery, GetActivePipelineRunsQueryVariables>(GetActivePipelineRunsDocument, variables, options) as Promise<GetActivePipelineRunsQuery>;
    },
    SetRunShare(variables: SetRunShareMutationVariables, options?: C): Promise<SetRunShareMutation> {
      return requester<SetRunShareMutation, SetRunShareMutationVariables>(SetRunShareDocument, variables, options) as Promise<SetRunShareMutation>;
    },
    GetPlans(variables?: GetPlansQueryVariables, options?: C): Promise<GetPlansQuery> {
      return requester<GetPlansQuery, GetPlansQueryVariables>(GetPlansDocument, variables, options) as Promise<GetPlansQuery>;
    },
    GetCreditPacks(variables?: GetCreditPacksQueryVariables, options?: C): Promise<GetCreditPacksQuery> {
      return requester<GetCreditPacksQuery, GetCreditPacksQueryVariables>(GetCreditPacksDocument, variables, options) as Promise<GetCreditPacksQuery>;
    },
    GetSubscription(variables?: GetSubscriptionQueryVariables, options?: C): Promise<GetSubscriptionQuery> {
      return requester<GetSubscriptionQuery, GetSubscriptionQueryVariables>(GetSubscriptionDocument, variables, options) as Promise<GetSubscriptionQuery>;
    },
    CreateCheckoutSession(variables: CreateCheckoutSessionMutationVariables, options?: C): Promise<CreateCheckoutSessionMutation> {
      return requester<CreateCheckoutSessionMutation, CreateCheckoutSessionMutationVariables>(CreateCheckoutSessionDocument, variables, options) as Promise<CreateCheckoutSessionMutation>;
    },
    WatchPipelineRun(variables: WatchPipelineRunSubscriptionVariables, options?: C): AsyncIterable<WatchPipelineRunSubscription> {
      return requester<WatchPipelineRunSubscription, WatchPipelineRunSubscriptionVariables>(WatchPipelineRunDocument, variables, options) as AsyncIterable<WatchPipelineRunSubscription>;
    },
    WatchActivePipelineRuns(variables?: WatchActivePipelineRunsSubscriptionVariables, options?: C): AsyncIterable<WatchActivePipelineRunsSubscription> {
      return requester<WatchActivePipelineRunsSubscription, WatchActivePipelineRunsSubscriptionVariables>(WatchActivePipelineRunsDocument, variables, options) as AsyncIterable<WatchActivePipelineRunsSubscription>;
    },
    WatchNotifications(variables: WatchNotificationsSubscriptionVariables, options?: C): AsyncIterable<WatchNotificationsSubscription> {
      return requester<WatchNotificationsSubscription, WatchNotificationsSubscriptionVariables>(WatchNotificationsDocument, variables, options) as AsyncIterable<WatchNotificationsSubscription>;
    },
    GetMyApiKeys(variables?: GetMyApiKeysQueryVariables, options?: C): Promise<GetMyApiKeysQuery> {
      return requester<GetMyApiKeysQuery, GetMyApiKeysQueryVariables>(GetMyApiKeysDocument, variables, options) as Promise<GetMyApiKeysQuery>;
    },
    CreatePersonalAccessToken(variables: CreatePersonalAccessTokenMutationVariables, options?: C): Promise<CreatePersonalAccessTokenMutation> {
      return requester<CreatePersonalAccessTokenMutation, CreatePersonalAccessTokenMutationVariables>(CreatePersonalAccessTokenDocument, variables, options) as Promise<CreatePersonalAccessTokenMutation>;
    },
    RevokePersonalAccessToken(variables: RevokePersonalAccessTokenMutationVariables, options?: C): Promise<RevokePersonalAccessTokenMutation> {
      return requester<RevokePersonalAccessTokenMutation, RevokePersonalAccessTokenMutationVariables>(RevokePersonalAccessTokenDocument, variables, options) as Promise<RevokePersonalAccessTokenMutation>;
    },
    GetCurrentUser(variables?: GetCurrentUserQueryVariables, options?: C): Promise<GetCurrentUserQuery> {
      return requester<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, variables, options) as Promise<GetCurrentUserQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;