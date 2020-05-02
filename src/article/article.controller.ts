import { Controller, Get, Post, Put, Patch, Delete, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiBadRequestResponse,
    ApiNotFoundResponse,
    ApiUnauthorizedResponse,
    ApiOkResponse,
    ApiForbiddenResponse,
    ApiUseTags,
    ApiBearerAuth,
    } from '@nestjs/swagger';

import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';

@ApiUseTags('Article')
@Controller('article')
export class ArticleController {
    constructor(
        private readonly articleService: ArticleService,
    ) { }
    
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({})
    @ApiBadRequestResponse({})
    @ApiNotFoundResponse({})
    async getOneArticle() {
        return 'thisis pejman';
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({})
    @ApiNotFoundResponse({})
    async getAllArticles() {
        return 'get all articles';
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiBearerAuth()
    @ApiCreatedResponse({})
    @ApiBadRequestResponse({})
    @ApiUnauthorizedResponse({})
    @ApiForbiddenResponse({})
    async createArticle(@Body() createArticleDto: CreateArticleDto) {
        return;
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiOkResponse({})
    @ApiBadRequestResponse({})
    @ApiUnauthorizedResponse({})
    @ApiForbiddenResponse({})
    async updateWithAllParams() {
        return 'update with all params';
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiOkResponse({})
    @ApiBadRequestResponse({})
    @ApiUnauthorizedResponse({})
    @ApiForbiddenResponse({})
    async updateWithPartialParams() {
        return 'update with partial params';
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiOkResponse({})
    @ApiBadRequestResponse({})
    @ApiUnauthorizedResponse({})
    @ApiForbiddenResponse({})
    async deleteOneArticle() {
        return 'delete one article';
    }
}
