import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ArticleStatus } from "./articles.model";

@Entity()
export class Article extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: ArticleStatus;

    @ManyToOne(type => User, user => user.articles, { eager: false })
    user: User;
}