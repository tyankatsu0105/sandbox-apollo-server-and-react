export const assertData = <ReturnType = unknown>(
  data: never,
  callback?: (data: never) => ReturnType
) => (callback ? callback(data) : data);
