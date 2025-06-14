import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ZodValidationPipe } from "./pipes/zod-validation-pipe";
import { z } from "zod";
import { CreateProfileService } from "./create-profile.service";

const createProfileBodySchema = z.object({
  userId: z.string(),
  avatarUrl: z.string().nullable().optional(),
});

const bodyValidationPipe = new ZodValidationPipe(createProfileBodySchema);

type CreateProfileBodySchema = z.infer<typeof createProfileBodySchema>;

@Controller('/profiles')
export class CreateProfileController {
  constructor(private createProfile: CreateProfileService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationPipe) body: CreateProfileBodySchema) {
    const { userId, avatarUrl } = body;

    await this.createProfile.execute({
      userId,
      avatarUrl,
    });
  }
}
