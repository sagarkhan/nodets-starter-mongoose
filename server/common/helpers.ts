export const cleanObject = (obj: Record<string, unknown>): Record<string, unknown> => JSON.parse(JSON.stringify(obj));

export const sleep = (ms: number): Promise<any> => new Promise(resolve => setTimeout(resolve, ms));

export const sortObject = (data: Array<any> = [], key: string): Array<any> =>
  data.sort((a, b) => (Number(a[key]) > Number(b[key]) ? 1 : -1));

export const isObjectEmpty = (obj: Record<string, unknown>): boolean => {
  if (obj && Object.keys(obj).length) {
    return false;
  }
  return true;
};

export const errorParser = (err: Record<string, unknown>): any => {
  if (err.response) {
    return err.response;
  }

  if (err.request) {
    return err.request;
  }
  return err;
};
