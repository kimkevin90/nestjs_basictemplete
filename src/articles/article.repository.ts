import { EntityRepository, Repository } from "typeorm";
import { Article } from "./article.entity";
import { ArticleStatus } from "./articles.model";
import { CreateArticleDto } from "./dto/create-article.dto";

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
    async createArticle(createArticleDto: CreateArticleDto):Promise<Article> {
        const { title, description } = createArticleDto;
    
        const article= this.create({
          title,
          description,
          status: ArticleStatus.PUBLIC
        })
        await this.save(article);
        return article;
    }
}