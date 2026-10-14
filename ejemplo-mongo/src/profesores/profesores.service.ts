import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto.js';
import { UpdateProfesorDto } from './dto/update-profesor.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { Profesor } from './entities/profesore.entity.js';
import { Model } from 'mongoose';

@Injectable()
export class ProfesoresService {

  constructor(@InjectModel(Profesor.name) private readonly profesorModel: Model<Profesor>) {}

  async create(createProfesorDto: CreateProfesorDto) {
    const createdProfesor = await this.profesorModel.create(createProfesorDto);
    return createdProfesor;
  }

  async findAll() {
    return await this.profesorModel.find();
  }

  async findOne(id: string) {
    return await this.profesorModel.findById(id);
  }

  async update(id: string, updateProfesorDto: UpdateProfesorDto) {
    return await this.profesorModel.findByIdAndUpdate(id, updateProfesorDto, { upsert: true }).exec();
  }

  async remove(id: string) {
    return await this.profesorModel.findByIdAndDelete(id);
  }
}
