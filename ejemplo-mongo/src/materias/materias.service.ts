import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto.js';
import { UpdateMateriaDto } from './dto/update-materia.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Materia } from './entities/materia.entity.js';
@Injectable()
export class MateriasService {
  constructor(@InjectModel(Materia.name) private readonly materiaModel: Model<Materia>) {}


  create(createMateriaDto: CreateMateriaDto) {
    return this.materiaModel.create(createMateriaDto);
  }

  async findAll() {
    return this.materiaModel.find().populate('profesor').exec();
  }

  async findOne(id: string) {
    return this.materiaModel.findById(id).populate('profesor').exec();
  }

  async update(id: string, updateMateriaDto: UpdateMateriaDto) {
    return this.materiaModel.findByIdAndUpdate(id, updateMateriaDto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.materiaModel.deleteOne({ _id: id }).exec();
  }
}
