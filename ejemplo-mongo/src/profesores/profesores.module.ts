import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfesoresService } from './profesores.service.js';
import { ProfesoresController } from './profesores.controller.js';
import { Profesor, ProfesorSchema } from './entities/profesore.entity.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: Profesor.name, schema: ProfesorSchema },])],
  controllers: [ProfesoresController],
  providers: [ProfesoresService],
})
export class ProfesoresModule {}
