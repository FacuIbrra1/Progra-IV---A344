import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProfesoresModule } from './profesores/profesores.module.js';
import { MateriasModule } from './materias/materias.module.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI!), ProfesoresModule, MateriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
