import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { User, Prisma } from "@prisma/client";

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  
  async findMany(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }


  async findById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

 
  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

 
  async create(data: Prisma.UserUncheckedCreateInput): Promise<void> {
    await this.prisma.user.create({
      data,
    });
  }

  
  async update(data: Prisma.UserUncheckedUpdateInput): Promise<void> {
    await this.prisma.user.update({
      where: { id: data.id?.toString() },
      data,
    });
  }

 
  async delete(user: User): Promise<void> {
    await this.prisma.user.delete({
      where: { id: user.id },
    });
  }
}
