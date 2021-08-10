import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
// import { Article } from './article.entity';
import { ArticleRepository } from './article.repository';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  // AuthModule을 넣고 useguard를 통해 로그인 유저만 article 모듈 쓸수있도록함
  imports: [
    TypeOrmModule.forFeature([ArticleRepository]),
    AuthModule
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule { }
