import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pet } from "./pet";

@Module({
    imports: [TypeOrmModule.forFeature([Pet])]
})
export class PetModule {}
