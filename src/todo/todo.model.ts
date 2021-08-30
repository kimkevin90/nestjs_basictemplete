import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { TaskList } from 'src/tasklist/tasklist.model';
import { User } from 'src/user/user.model';

@Schema()
export class ToDo {
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  content: string;

  @Prop()
  isCompleted: boolean;

  @Prop()
  taskList: TaskList;
}

export type ToDoDocument = ToDo & Document;

export const ToDoSchema = SchemaFactory.createForClass(ToDo);
