import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findMany(): Promise<Prisma.UserUncheckedCreateInput[]> {
    return await this.prisma.user.findMany();
  }

  async findById(id: string): Promise<Prisma.UserUncheckedCreateInput | null> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: Prisma.UserUncheckedCreateInput): Promise<void> {
    await this.prisma.user.create({
      data,
    });
  }

  async update(data: Prisma.UserUncheckedUpdateInput): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: data.id?.toString(),
      },
      data,
    });
  }

  async delete(user: Prisma.UserUncheckedCreateInput): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: user.id?.toString(),
      },
    });
  }
}
