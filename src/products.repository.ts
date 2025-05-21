import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class ProductsRepository{
    constructor(private prisma: PrismaService){}


    findById(id: string): Promise<Prisma.ProductUncheckedCreateInput | null>{
        const product = this.prisma.product.findUnique({
            where:{
                id, 
            }
        });
        return product;
    }

    async findByName(name: string): Promise<Prisma.ProductUncheckedCreateInput | null> {
        const product = this.prisma.product.findUnique({
            where: {
                name, 
            }
        });
        return product;
    }

    async create(product: Prisma.ProductUncheckedCreateInput): Promise<void>{
        await this.prisma.product.create({
            data: product,
        });
    }
    

}

