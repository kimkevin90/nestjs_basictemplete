import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet, PetDcoument } from './pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDcoument>) {}

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = new this.petModel(createPetInput);
    return newPet.save();
  }

  async findAll(): Promise<Pet[]> {
    return this.petModel.find().exec();
  }

  async getPet(id: string): Promise<Pet> {
    return this.petModel.findById(id);
  }
}
