import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrigemEspecie } from "./origem-especie";

@Module({
    imports: [TypeOrmModule.forFeature([OrigemEspecie])]
})
export class OrigemEspecieModule {}
