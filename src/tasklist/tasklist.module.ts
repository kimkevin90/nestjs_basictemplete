import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskList, TaskListSchema } from './tasklist.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TaskList.name, schema: TaskListSchema },
    ]),
  ],
})
export class TasklistModule {}
