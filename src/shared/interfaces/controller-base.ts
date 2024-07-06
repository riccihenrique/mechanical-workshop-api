
type ControllerParams<B, Q, P, H> = {
  body: B;
  query: Q;
  params: P;
  headers: H;
};

type ControllerResponse = {
  data: any;
  statusCode: number;
}

export interface IBaseController<B = any, Q = any, P = any, H = any> {
  execute(params: ControllerParams<B, Q, P, H>): Promise<ControllerResponse>;
}