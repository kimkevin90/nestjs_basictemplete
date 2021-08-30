import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ToDo } from 'src/todo/todo.model';
import { User } from 'src/user/user.model';

@Schema()
export class TaskList {
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  progress: number;

  @Prop()
  users: User[];
  todo: ToDo[];
}

export type TaskListDocument = TaskList & Document;

export const TaskListSchema = SchemaFactory.createForClass(TaskList);
