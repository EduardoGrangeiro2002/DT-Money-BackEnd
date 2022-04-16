/* eslint-disable @typescript-eslint/no-explicit-any */
export namespace Http {
  export type Request<T = any> = {
    body: T;
    params: T;
    query: T;
  };

  export type Response<T = any> = {
    statusCode: number;
    data?: T;
  };
}

export const statusError = (error: Error): Http.Response => {
  return {
    statusCode: 500,
    data: error.stack,
  };
};

export const statusSuccess = (data?: any): Http.Response => {
  return {
    statusCode: 201,
    data,
  };
};
