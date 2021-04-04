import * as SharedTypes from '~client/app/ui/shared/types';

/**
 * `:`で始まるstringを置換する
 * @example
 * const uri = '/users/:teamID/:userID/edit'
 * replaceParams(uri, { teamID: '123', userID: '456' })
 * // => '/users/123/456/edit'
 */
export const replaceParams = <URI extends string>(
  uri: URI,
  paramsMap: Record<SharedTypes.Routes.PathParams<URI>, string>
): string => {
  let result: string = uri;

  Object.entries(paramsMap).forEach(([key, value]) => {
    result = result.replace(`:${key}`, value as string);
  });

  return result;
};
