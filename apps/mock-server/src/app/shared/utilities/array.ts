export const createArray = (length = 10) => Array.from(new Array(length));

export const toNonNullableArray = <Data extends unknown>(data: Data[]) =>
  data.filter((item): item is NonNullable<Data> => item != null);
