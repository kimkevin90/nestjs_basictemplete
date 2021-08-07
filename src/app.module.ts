import { Module } from '@nestjs/common';
import { ArticlesController } from './articles/articles.controller';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ArticlesModule],
  controllers: [],
})
export class AppModule {}
