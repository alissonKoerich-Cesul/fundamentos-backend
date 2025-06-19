import { Injectable, BadRequestException } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

interface CreateUserRequest {
  email: string;
}

@Injectable()
export class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ email }: CreateUserRequest): Promise<void> {
    const userExists = await this.usersRepository.findByEmail(email);
    if (userExists) {
      throw new BadRequestException("User with this email already exists.");
    }

    await this.usersRepository.create({ email });
  }
}
