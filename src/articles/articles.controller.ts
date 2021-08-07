import { Body, Controller, Get, Post } from '@nestjs/common';
import { Article } from './articles.model';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get('/')
  getAllArticles(): Article[] {
    return this.articlesService.getAllArticles();
  }

  @Post()
  createArticle(@Body() CreateArticleDto: CreateArticleDto): Article {
    return this.articlesService.createArticle(CreateArticleDto);
  }

  @Get('/:id')
  getArticleById(@Param)
}
