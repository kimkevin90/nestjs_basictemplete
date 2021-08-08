import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'article-app',
    // 엔티티를 이용해 데이터베이스 테이블 생성, 엔티티 파일 경로 설정
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}