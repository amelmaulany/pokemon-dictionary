export type ListResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  result: Array<T>;
};
