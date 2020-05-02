import { Controller, Get, Post, Put, Patch, Delete, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiUseTags,
    ApiBearerAuth,
    ApiImplicitHeader,
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
    async getOneArticle() {
        return 'thisis pejman';
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({})
    async getAllArticles() {
        return 'get all articles';
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiBearerAuth()
    @ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    })
    @ApiCreatedResponse({})
    async createArticle(@Body() createArticleDto: CreateArticleDto) {
        return;
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    })
    @ApiOkResponse({})
    async updateWithAllParams() {
        return 'update with all params';
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    })
    @ApiOkResponse({})
    async updateWithPartialParams() {
        return 'update with partial params';
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    })
    @ApiOkResponse({})
    async deleteOneArticle() {
        return 'delete one article';
    }
}
