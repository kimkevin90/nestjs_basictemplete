import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
// import * as config from 'config';

// jwt.startegy를 다른 app에서 사용하기 위해 @Injectable() 주입
// PassportStrategy 상속
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    // 토큰 유효성 검사 후 username을 바탕으로 db쿼리 위해 user repo 주입
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      // 토큰 유효성 체크
      secretOrKey: 'testjwt',
      // 토큰을 Authrozation Header로 부터 받아 BaarerToken 인증
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload) {
    const { username } = payload;
    // payload의 유저가 있는지 확인
    const user: User = await this.userRepository.findOne({ username });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
