import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Especie } from "./especie";

@Module({
    imports: [TypeOrmModule.forFeature([Especie])]
})
export class EspecieModule {}
