type PathParams<
  Path extends string
> = Path extends `:${infer Param}/${infer Rest}`
  ? Param | PathParams<Rest>
  : Path extends `:${infer Param}`
  ? Param
  : Path extends `${any}:${infer Param}`
  ? PathParams<`:${Param}`>
  : never;

export type GetParams<URL extends string> = {
  [key in PathParams<URL>]: string;
};
