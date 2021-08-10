import { Logger, ParseIntPipe, Patch, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ArticleStatusValidationPipe } from 'src/articles/pipes/article-status-validation.pipe';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Article } from './article.entity';
import { ArticleStatus } from './articles.model';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
@UseGuards(AuthGuard())
export class ArticlesController {
  private logger = new Logger('Articles');
  constructor(private articlesService: ArticlesService) { }

  @Get()
  getAllArticles(
    @GetUser() user: User
  ): Promise<Article[]> {
    this.logger.verbose(`User ${user.username} trying to get all boards`);
    return this.articlesService.getAllArticles(user);
  }

  @Get('/:id')
  getArticleById(@Param('id') id: number): Promise<Article> {
    return this.articlesService.getArticleById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createArticle(@Body() CreateArticleDto: CreateArticleDto, @GetUser() user: User): Promise<Article> {
    this.logger.verbose(`User ${user.username} creating a new board. 
    Payload: ${JSON.stringify(CreateArticleDto)} `)
    return this.articlesService.createArticle(CreateArticleDto, user);
  }

  @Delete('/:id')
  deleteArticle(@Param('id', ParseIntPipe) id,
    @GetUser() user: User
  ): Promise<void> {
    return this.articlesService.deleteArticle(id, user);
  }

  @Patch('/:id/status')
  updateArticleStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', ArticleStatusValidationPipe) status: ArticleStatus,
  ) {
    return this.articlesService.updateArticleStatus(id, status);
  }

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
