import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

export interface User {
  id: string;
  email: string;
  createdAt: string | Date | undefined;
  updatedAt: string | Date | null | undefined;
}

interface GetUserByIdServiceRequest {
  id: string;
}

type GetUserByIdServiceResponse = {
  user: User;
};

@Injectable()
export class GetUserByIdService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    id,
  }: GetUserByIdServiceRequest): Promise<GetUserByIdServiceResponse> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    const newUser: User = {
      id: user.id?.toString() || "",
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return {
      user: newUser,
    };
  }
}
