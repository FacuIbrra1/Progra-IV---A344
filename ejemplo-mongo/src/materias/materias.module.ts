import { Module } from '@nestjs/common';
import { MateriasService } from './materias.service.js';
import { MateriasController } from './materias.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Materia, MateriaSchema } from './entities/materia.entity.js';
@Module({
  imports: [MongooseModule.forFeature([{ name: Materia.name, schema: MateriaSchema }])],
  controllers: [MateriasController],
  providers: [MateriasService],
})
export class MateriasModule {}
