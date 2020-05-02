import { Controller, Get, Post, Put, Patch, Delete, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';

import { ArticleService } from './article.service';

import { CreateArticleDto } from './dto/create-article.dto';


@Controller('article')
export class ArticleController {
    constructor(
        private readonly articleService: ArticleService,
    ) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createArticle(@Body() createArticleDto: CreateArticleDto) {
        return;
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getOneArticle() {
        return 'thisis pejman';
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllArticles() {
        return 'get all articles';
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    async updateWithAllParams() {
        return 'update with all params';
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    async updateWithPartialParams() {
        return 'update with partial params';
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    async deleteOneArticle() {
        return 'delete one article';
    }
}
