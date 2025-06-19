import { Body, Controller, HttpCode, Param, Put } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe"; 
import { EditProfileService } from "./edit-profile.service";


const editProfileBodySchema = z.object({
  avatarUrl: z.string().url().nullable().optional(),
});

const bodyValidationPipe = new ZodValidationPipe(editProfileBodySchema);
type EditProfileBodySchema = z.infer<typeof editProfileBodySchema>;

@Controller('/profiles/:id')
export class EditProfileController {
  constructor(private editProfile: EditProfileService) {}

  @Put()
  @HttpCode(204)
  async handle(
    @Param('id') id: string,
    @Body(bodyValidationPipe) body: EditProfileBodySchema,
  ) {
    const { avatarUrl } = body;

    await this.editProfile.execute({
      id,
      avatarUrl,
    });
  }
}
