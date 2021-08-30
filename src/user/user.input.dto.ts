import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class SignUpInput {
  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  avatar: string;

  @Field()
  createdAt: string = new Date().toISOString();
}

@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(SignUpInput, ['password', 'createdAt'] as const),
) {}
