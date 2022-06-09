import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    description: string;

    @Prop({ type: [String], default: [] })
    photos;

    @Prop()
    activationLink: string;

    @Prop({ type: Boolean, default: false })
    isActivated;
}

export const UserSchema = SchemaFactory.createForClass(User);