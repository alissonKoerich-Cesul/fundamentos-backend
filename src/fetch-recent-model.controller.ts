import { Controller, Get, HttpCode } from "@nestjs/common";
import { FetchRecentModelService } from "./fetch.recent.models.service";

@Controller('/models/all')
export class FetchRecentModelController {
    constructor(private fetchRecentModels: FetchRecentModelService){}
      
    @Get()
    @HttpCode(200)
    async handle(){
    
        const data = await this.fetchRecentModels.execute();
        return data;
    }
}