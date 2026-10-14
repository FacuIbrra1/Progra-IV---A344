import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Profesor {
    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true, default: 'sin apellido' })
    apellido: string;

    @Prop({ required: true, default: 'sin email' })
    email: string;
}

export const ProfesorSchema = SchemaFactory.createForClass(Profesor);