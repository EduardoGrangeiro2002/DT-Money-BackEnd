import { Http } from "./http";

export interface IController {
  handle: (request?: Http.Request) => Promise<Http.Response>;
}
