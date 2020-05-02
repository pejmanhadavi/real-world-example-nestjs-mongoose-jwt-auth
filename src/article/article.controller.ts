import { Controller, Get, Post, Put, Patch, Delete, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiUseTags,
    ApiBearerAuth,
    ApiImplicitHeader,
    ApiOperation,
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
    @ApiOperation({title: 'Get All article',})
    @ApiOkResponse({})
    async getOneArticle() {
        return 'thisis pejman';
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Get One article',})
    @ApiOkResponse({})
    async getAllArticles() {
        return 'get all articles';
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({title: 'Create one article',})
    @ApiBearerAuth()
    @ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    })
    @ApiCreatedResponse({})
    async createArticle(@Body() createArticleDto: CreateArticleDto) {
        return await this.articleService.createArticle(createArticleDto);
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Update one article by id ( all params )',})
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
    @ApiOperation({title: 'Update one article by id ( partial params )',})
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
    @ApiOperation({title: 'Delete one article',})
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
