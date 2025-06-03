import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Prisma} from "@prisma/client";
@Injectable()
export class ModelsRepository{
    constructor(private prisma: PrismaService) {}

    async findRecents() :Promise<Array<Prisma.ModeloUncheckedCreateInput> | null>{
        const modelo = this.prisma.modelo.findMany();
        return modelo
    }


    async findById(id:string):Promise< Prisma.ModeloUncheckedCreateInput | null>{
        const modelo = this.prisma.modelo.findUnique({
            where:{
                id,
            }
        });
        return modelo
    }

    async findByName(nome:string):Promise<Prisma.ModeloUncheckedCreateInput | null>{
        const modelo = this.prisma.modelo.findUnique({
            where:{
                nome,
            }
        });
        return modelo
    }

    async create(model: Prisma.ModeloUncheckedCreateInput): Promise<Prisma.ModeloUncheckedCreateInput>{
        return await this.prisma.modelo.create({
            data: model
        });
        
    }

}