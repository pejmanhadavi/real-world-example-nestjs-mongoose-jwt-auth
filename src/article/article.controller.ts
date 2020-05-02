import { Controller, Get, Post, Put, Patch, Delete, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiBadRequestResponse,
    ApiNotFoundResponse,
    ApiUnauthorizedResponse,
    ApiOkResponse,
    ApiForbiddenResponse,
    ApiUseTags,
    } from '@nestjs/swagger';

import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';

@ApiUseTags('Article')
@Controller('article')
export class ArticleController {
    constructor(
        private readonly articleService: ArticleService,
    ) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({})
    @ApiBadRequestResponse({})
    @ApiUnauthorizedResponse({})
    @ApiForbiddenResponse({})
    async createArticle(@Body() createArticleDto: CreateArticleDto) {
        return;
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({})
    @ApiBadRequestResponse({})
    @ApiNotFoundResponse({})
    async getOneArticle() {
        return 'thisis pejman';
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({})
    @ApiNotFoundResponse({})
    async getAllArticles() {
        return 'get all articles';
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({})
    @ApiBadRequestResponse({})
    @ApiUnauthorizedResponse({})
    @ApiForbiddenResponse({})
    async updateWithAllParams() {
        return 'update with all params';
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({})
    @ApiBadRequestResponse({})
    @ApiUnauthorizedResponse({})
    @ApiForbiddenResponse({})
    async updateWithPartialParams() {
        return 'update with partial params';
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({})
    @ApiBadRequestResponse({})
    @ApiUnauthorizedResponse({})
    @ApiForbiddenResponse({})
    async deleteOneArticle() {
        return 'delete one article';
    }
}
