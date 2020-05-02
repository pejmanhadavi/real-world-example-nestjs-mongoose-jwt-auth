import { Controller } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
    constructor (
        private readonly articleService: ArticleService,
    ) {}

    async createArticle() {
        return;
    }
}
