import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel('Article') private readonly articleModel: Model<Article>,
    ) { }

    // ┌─┐┬─┐┌─┐┌─┐┌┬┐┌─┐  ┌─┐┬─┐┌┬┐┬┌─┐┬  ┌─┐
    // │  ├┬┘├┤ ├─┤ │ ├┤   ├─┤├┬┘ │ ││  │  ├┤ 
    // └─┘┴└─└─┘┴ ┴ ┴ └─┘  ┴ ┴┴└─ ┴ ┴└─┘┴─┘└─┘

    async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
        const article = new this.articleModel(createArticleDto);
        await article.save();
        return article;
    }

    // ┌─┐┌─┐┌┬┐  ┌─┐┬  ┬    ┌─┐┬─┐┌┬┐┬┌─┐┬  ┌─┐┌─┐
    // │ ┬├┤  │   ├─┤│  │    ├─┤├┬┘ │ ││  │  ├┤ └─┐
    // └─┘└─┘ ┴   ┴ ┴┴─┘┴─┘  ┴ ┴┴└─ ┴ ┴└─┘┴─┘└─┘└─┘
    async getAllArticles() {
        return;
    }

    // ┌─┐┌─┐┌┬┐  ┌─┐┌┐┌┌─┐  ┌─┐┬─┐┌┬┐┬┌─┐┬  ┌─┐
    // │ ┬├┤  │   │ ││││├┤   ├─┤├┬┘ │ ││  │  ├┤ 
    // └─┘└─┘ ┴   └─┘┘└┘└─┘  ┴ ┴┴└─ ┴ ┴└─┘┴─┘└─┘
    async getOneArticle() {
        return;
    }

    // ┬ ┬┌─┐┌┬┐┌─┐┌┬┐┌─┐  ┌─┐┬─┐┌┬┐┬┌─┐┬  ┌─┐    ┌─┐┬  ┬    ┌─┐┌─┐┬─┐┌─┐┌┬┐┌─┐  
    // │ │├─┘ ││├─┤ │ ├┤   ├─┤├┬┘ │ ││  │  ├┤     ├─┤│  │    ├─┘├─┤├┬┘├─┤│││└─┐  
    // └─┘┴  ─┴┘┴ ┴ ┴ └─┘  ┴ ┴┴└─ ┴ ┴└─┘┴─┘└─┘    ┴ ┴┴─┘┴─┘  ┴  ┴ ┴┴└─┴ ┴┴ ┴└─┘  \
    async updateArticlePut() {
        return;
    }

    // ┬ ┬┌─┐┌┬┐┌─┐┌┬┐┌─┐  ┌─┐┬─┐┌┬┐┬┌─┐┬  ┌─┐    ┌─┐┌─┐┬─┐┌┬┐┬┌─┐┬    ┌─┐┌─┐┬─┐┌─┐┌┬┐┌─┐  
    // │ │├─┘ ││├─┤ │ ├┤   ├─┤├┬┘ │ ││  │  ├┤     ├─┘├─┤├┬┘ │ │├─┤│    ├─┘├─┤├┬┘├─┤│││└─┐  
    // └─┘┴  ─┴┘┴ ┴ ┴ └─┘  ┴ ┴┴└─ ┴ ┴└─┘┴─┘└─┘    ┴  ┴ ┴┴└─ ┴ ┴┴ ┴┴─┘  ┴  ┴ ┴┴└─┴ ┴┴ ┴└─┘ 
    async updateArticlePatch() {
        return;
    }

    // ┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐  ┌─┐┌┐┌┌─┐  ┌─┐┬─┐┌┬┐┬┌─┐┬  ┌─┐
    //  ││├┤ │  ├┤  │ ├┤   │ ││││├┤   ├─┤├┬┘ │ ││  │  ├┤ 
    // ─┴┘└─┘┴─┘└─┘ ┴ └─┘  └─┘┘└┘└─┘  ┴ ┴┴└─ ┴ ┴└─┘┴─┘└─┘
    async deleteArticle() {
        return;
    }

    // ********************************************
    // ╔═╗╦═╗╦╦  ╦╔═╗╔╦╗╔═╗  ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
    // ╠═╝╠╦╝║╚╗╔╝╠═╣ ║ ║╣   ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
    // ╩  ╩╚═╩ ╚╝ ╩ ╩ ╩ ╚═╝  ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝
    // ********************************************
}
