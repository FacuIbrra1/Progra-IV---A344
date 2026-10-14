import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Materia {
    @Prop()
    numero: number; 

    @Prop()
    nombre: string; 

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profesor' })
    profesor: mongoose.Types.ObjectId; 
}

export const MateriaSchema = SchemaFactory.createForClass(Materia);
