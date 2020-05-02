import { Controller, Get, Post, Put, Patch, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiUseTags,
    ApiBearerAuth,
    ApiImplicitHeader,
    ApiOperation,
    ApiImplicitParam,
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
    async getAllArticle() {
        return await this.articleService.getAllArticles();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Get One article',})
    @ApiImplicitParam({name: 'id', description: 'id of article'})
    @ApiOkResponse({})
    async getOneArticles(@Param() params) {
        return await this.articleService.getOneArticle(params.id);
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

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Delete one article',})
    @ApiBearerAuth()
    @ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    })
    @ApiImplicitParam({name: 'id', description: 'id of article we want to delete.'})
    @ApiOkResponse({})
    async deleteOneArticle(@Param() params) {
        return await this.articleService.deleteArticle(params.id);
    }
}
