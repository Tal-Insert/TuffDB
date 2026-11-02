import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tutor } from "./tutor";

@Module({
    imports: [TypeOrmModule.forFeature([Tutor])]
})
export class TutorModule {}
