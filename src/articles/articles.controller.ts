import { ParseIntPipe, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ArticleStatusValidationPipe } from 'src/articles/pipes/article-status-validation.pipe';
import { Article } from './article.entity';
import {  ArticleStatus } from './articles.model';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}
  @Get('/:id')
  getArticleById(@Param('id') id: number) : Promise<Article> {
    return this.articlesService.getArticleById(id)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createArticle(@Body() CreateArticleDto: CreateArticleDto): Promise<Article> {
    return this.articlesService.createArticle(CreateArticleDto);
  }

  @Delete('/:id')
  deleteArticle(@Param('id', ParseIntPipe) id) : Promise<void> {
    return this.articlesService.deleteArticle(id);
  }

  @Patch('/:id/status')
  updateArticleStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', ArticleStatusValidationPipe) status: ArticleStatus,
  ){
    return this.articlesService.updateArticleStatus(id, status);
  }

  
  // @Get('/')
  // getAllArticles(): Article[] {
  //   return this.articlesService.getAllArticles();
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createArticle(@Body() CreateArticleDto: CreateArticleDto): Article {
  //   return this.articlesService.createArticle(CreateArticleDto);
  // }

  // @Get('/:id')
  // getArticleById(@Param('id') id: string) : Article {
  //   return this.articlesService.getArticleById(id)
  // }
 
  // @Delete('/:id')
  // deleteArticle(@Param('id') id: string) : void {
  //   this.articlesService.deleteArticle(id);
  // }

  // @Patch('/:id/status')
  // updateArticleStatus(
  //   @Param('id') id: string,
  //   @Body('status', ArticleStatusValidationPipe) status: ArticleStatus,
  // ){
  //   return this.articlesService.updateArticleStatus(id, status);
  // }
}
