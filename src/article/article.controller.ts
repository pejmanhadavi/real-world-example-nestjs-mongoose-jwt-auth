import { Controller, Get, Post, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';

import { ArticleService } from './article.service';

import { CreateArticleDto } from './dto/create-article.dto';


@Controller('article')
export class ArticleController {
    constructor (
        private readonly articleService: ArticleService,
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createArticle(@Body() createArticleDto: CreateArticleDto) {
        return;
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getSomething() {
        return 'thisis pejman';
    }
}
