import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './pet.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Pet.name,
        useFactory: () => {
          const schema = PetSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
    ]),
  ],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
