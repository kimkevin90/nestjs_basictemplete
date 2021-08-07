import { Injectable } from '@nestjs/common';
import { Article, ArticleStatus } from './articles.model';
import { v1 as uuid } from 'uuid';
import { CreateArticleDto } from './dto/create-article.dto';
@Injectable()
export class ArticlesService {
  private articles: Article[] = [];

  getAllArticles(): Article[] {
    return this.articles;
  }

  createArticle(createArticleDto: CreateArticleDto) {
    const { title, description } = createArticleDto;

    const article: Article = {
      id: uuid(),
      title,
      description,
      status: ArticleStatus.PUBLIC,
    };
    this.articles.push(article);
    return article;
  }

  getArticleById(id: string): Article {
    return this.articles.find((article) => article.id === id);
  }
}
