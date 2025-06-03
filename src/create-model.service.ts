import { Injectable } from "@nestjs/common";
import { ModelsRepository } from "./models.repository";
interface Models {
    id: string,
    nome: string,
    createdAt: Date | string | null,
    updatedAt: Date |string | null | undefined,
}

interface CreateModelsServiceRequest {
    nome: string
}

type CreateModelsServiceResponse = {
    nome: CreateModelsService;

}

@Injectable()
export class CreateModelsService {

  constructor(private modelsRepository: ModelsRepository) { }

async execute({
    nome


    }: CreateModelsServiceRequest){
        const modelsWithSameName = await this.modelsRepository.findByName(nome);
        if(modelsWithSameName){
            throw new Error("Models already exists ");
        }
        const model = {
           nome,
        }
        const newProduct = await this.modelsRepository.create(model);
        return  {
            model:{
            id: newProduct.id?.toString() || "",
            nome
         
            }
        }
    }
}