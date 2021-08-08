import { BadRequestException, PipeTransform } from "@nestjs/common";
import { ArticleStatus } from "src/articles/articles.model";

export class ArticleStatusValidationPipe implements PipeTransform{
    //클래스 외부에서 접근 가능하지만 값은 변경 불가능 ~ readonly
    readonly StatusOptions = [ArticleStatus.PRIVATE, ArticleStatus.PUBLIC]
    transform(value: any) {
        value = value.toUpperCase();

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value}는 status options에 포함되지 않아요`)
        }
        return value;
     
    }

    private isStatusValid(status:any){
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}