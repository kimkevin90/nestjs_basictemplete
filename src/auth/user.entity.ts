import { Article } from 'src/articles/article.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  //eager true이면 article 같이 가져옴
  @OneToMany(type => Article, article => article.user, { eager: false })
  articles: Article[]
}
