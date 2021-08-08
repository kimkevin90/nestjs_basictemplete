import { Injectable, NotFoundException } from '@nestjs/common';
// import { Article, ArticleStatus } from './articles.model';
import { v1 as uuid } from 'uuid';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleRepository } from './article.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { ArticleStatus } from './articles.model';
@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleRepository)
    private articleRepository: ArticleRepository){}

  async getArticleById(id: number): Promise<Article> {
    const found = await this.articleRepository.findOne(id);

    if(!found) {
      throw new NotFoundException(`해당 ID를 찾을 수 없습니다.`)
    }
    return found;
  }

  createArticle(createArticleDto: CreateArticleDto):Promise<Article> {
    // const { title, description } = createArticleDto;

    // const article= this.articleRepository.create({
    //   title,
    //   description,
    //   status: ArticleStatus.PUBLIC
    // })
    // await this.articleRepository.save(article);
    // return article;
    return this.articleRepository.createArticle(createArticleDto);
  }

  async deleteArticle(id: number): Promise<void> {
    const result = await this.articleRepository.delete(id);
    if(result.affected === 0) {
      throw new NotFoundException('해당 id를 찾을 수 없습니다.')
    }
  }

  async updateArticleStatus(id:number, status:ArticleStatus): Promise<Article> {
    const article = await this.getArticleById(id);
    article.status = status;
    await this.articleRepository.save(article);

    return article;
  }



  // private articles: Article[] = [];

  // getAllArticles(): Article[] {
  //   return this.articles;
  // }

  // createArticle(createArticleDto: CreateArticleDto) {
  //   const { title, description } = createArticleDto;

  //   const article: Article = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: ArticleStatus.PUBLIC,
  //   };
  //   this.articles.push(article);
  //   return article;
  // }

  // getArticleById(id: string): Article {
  //   const found = this.articles.find((article) => article.id === id);
  //   if(!found){
  //     throw new NotFoundException(`해당 ${id}를 찾을 수 없습니다.`);
  //   }
  //   return found;
  // }

  // deleteArticle(id:string): void {
  //   const found = this.getArticleById(id);
  //   this.articles = this.articles.filter((article) => article.id === found.id);
  // }

  // updateArticleStatus(id:string, status:ArticleStatus): Article {
  //   const article = this.getArticleById(id);
  //   article.status = status;
  //   return article;
  // }
}
