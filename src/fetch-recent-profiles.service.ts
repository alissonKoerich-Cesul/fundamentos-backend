import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

export interface Profile {
  id: string;
  avatarUrl: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date | null;
}

type FetchProfilesServiceResponse = {
  profiles: Profile[];
}

@Injectable()
export class FetchProfilesService {
  constructor(private prisma: PrismaService) {}

  async execute(): Promise<FetchProfilesServiceResponse> {
    const profiles = await this.prisma.profile.findMany();

    if (!profiles) {
      throw new Error("No profiles found");
    }

    const formattedProfiles = profiles.map(profile => ({
      id: profile.id,
      avatarUrl: profile.avatarUrl,
      userId: profile.userId,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
    }));

    return { profiles: formattedProfiles };
  }
}
