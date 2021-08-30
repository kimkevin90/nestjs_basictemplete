import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUpInput } from './user.input.dto';
import { User, UserDocument } from './user.model';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { GraphQLError } from 'graphql';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
  ) {}

  async signUp(payload: SignUpInput) {
    try {
      const isUser = await this.UserModel.findOne({
        email: payload.email,
      });
      if (isUser) {
        throw new GraphQLError('존재하는 이메일');
      } else {
        const hashedPassword = bcrypt.hashSync(payload.password);
        const newUser = {
          ...payload,
          password: hashedPassword,
        };

        return await new this.UserModel(newUser).save();
      }
    } catch (err) {
      console.log(err);
    }
  }
  async signIn({ password, email }) {
    try {
      const user = await this.UserModel.findOne({ email });
      return user && (await bcrypt.compare(password, user.password))
        ? await this.jwtService.sign({ email, _id: user._id })
        : new GraphQLError('wrong password/email');
    } catch (err) {
      console.error(err);
    }
  }

  async findAll() {
    try {
    } catch (err) {}
  }
}
