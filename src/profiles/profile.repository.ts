import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Profile, Prisma } from "@prisma/client";

@Injectable()
export class ProfilesRepository {
  constructor(private prisma: PrismaService) {}

  async findByUserId(userId: string): Promise<Profile | null> {
    return await this.prisma.profile.findUnique({
      where: { userId },
    });
  }

  async create(data: Prisma.ProfileUncheckedCreateInput): Promise<void> {
    await this.prisma.profile.create({ data });
  }

  async update(userId: string, data: Prisma.ProfileUncheckedUpdateInput): Promise<void> {
    await this.prisma.profile.update({
      where: { userId },
      data,
    });
  }
}