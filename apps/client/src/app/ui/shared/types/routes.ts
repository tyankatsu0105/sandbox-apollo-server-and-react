/**
 * paramsのstring unionを返す
 * @example
 * const uri = '/users/:teamID/:userID/edit'
 * PathParams<typeof uri>
 * // => 'teamID' | 'userID'
 */
export type PathParams<
  Path extends string
> = Path extends `:${infer Param}/${infer Rest}`
  ? Param | PathParams<Rest>
  : Path extends `:${infer Param}`
  ? Param
  : Path extends `${any}:${infer Param}`
  ? PathParams<`:${Param}`>
  : never;

/**
 * react routerのParams型に利用する
 * @example
 * const uri = '/users/:userID'
 * const { userID } = useParams<GetParams<typeof uri>>()
 */
export type GetParams<URL extends string> = {
  [key in PathParams<URL>]: string;
};
