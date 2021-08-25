import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Pet } from 'src/pets/pet.entity';
@ObjectType()
export class Owner {
  @Field((type) => String)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' })
  @Field((type) => [Pet], { nullable: true })
  pets: Pet[];
}
