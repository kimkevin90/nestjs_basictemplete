import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PetDcoument = Pet & Document;

@Schema()
@ObjectType()
export class Pet {
  // @Prop()
  @Field((type) => String)
  _id: string;

  @Prop()
  @Field()
  name: string;

  //Graphql에게 옵셔널이라는걸 알리기
  @Prop()
  @Field({ nullable: true })
  type?: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
