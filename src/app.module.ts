import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
// import { UserModule } from './user/user.module';
// import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://classesd:@cluster0.yfbmb.mongodb.net/todo?retryWrites=true&w=majority',
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: false,
    }),
    UserModule,
  ],
})
export class AppModule {}
