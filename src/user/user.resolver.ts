import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from './user.guard';
import { SignUpInput } from './user.input.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly us: UserService) {}

  @Mutation(() => User)
  async signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    try {
      return await this.us.signUp(signUpInput);
    } catch (err) {
      console.error(err);
    }
  }

  @Mutation(() => String)
  async signIn(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    try {
      return await this.us.signIn({ email, password });
    } catch (err) {
      console.error(err);
    }
  }

  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  async findAllUsers() {
    try {
      return await this.us.findAll();
    } catch (err) {
      console.log(err);
    }
  }
}
