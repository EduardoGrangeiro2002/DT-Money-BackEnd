import { Request, Response } from "express";

import { ICreateUser } from "../../domain/features";
import { IController } from "../contracts/IController";

export class CreateUserController implements IController {
  constructor(private readonly createUserService: ICreateUser) {}
  async handle(request: Request, response: Response): Promise<Response<void>> {
    const { name, email, password } = request.body;

    await this.createUserService.create({ email, name, password });

    return response.status(201).json();
  }
}
