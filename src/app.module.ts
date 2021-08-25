import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from './articles/articles.module';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { PetsModule } from './pets/pets.module';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnersModule } from './owners/owners.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://classesd:pass@cluster0.yfbmb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    // TypeOrmModule.forRoot(typeORMConfig),
    // ArticlesModule,
    // AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PetsModule,
    OwnersModule,
  ],
})
export class AppModule {}
