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
    async getAllArticles(): Promise<any> {
        return await this.articleModel.find({});
    }

    // ┌─┐┌─┐┌┬┐  ┌─┐┌┐┌┌─┐  ┌─┐┬─┐┌┬┐┬┌─┐┬  ┌─┐
    // │ ┬├┤  │   │ ││││├┤   ├─┤├┬┘ │ ││  │  ├┤ 
    // └─┘└─┘ ┴   └─┘┘└┘└─┘  ┴ ┴┴└─ ┴ ┴└─┘┴─┘└─┘
    async getOneArticle(id: string): Promise<Article> {
        return await this.articleModel.findById(id);
    }

    // ┬ ┬┌─┐┌┬┐┌─┐┌┬┐┌─┐  ┌─┐┬─┐┌┬┐┬┌─┐┬  ┌─┐    ┌─┐┬  ┬    ┌─┐┌─┐┬─┐┌─┐┌┬┐┌─┐  
    // │ │├─┘ ││├─┤ │ ├┤   ├─┤├┬┘ │ ││  │  ├┤     ├─┤│  │    ├─┘├─┤├┬┘├─┤│││└─┐  
    // └─┘┴  ─┴┘┴ ┴ ┴ └─┘  ┴ ┴┴└─ ┴ ┴└─┘┴─┘└─┘    ┴ ┴┴─┘┴─┘  ┴  ┴ ┴┴└─┴ ┴┴ ┴└─┘  \
    async updateArticlePut(id: string, createArticleDto: CreateArticleDto): Promise<Article> {
        return await this.articleModel.updateOne({_id: id}, createArticleDto);
    }

    // ┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐  ┌─┐┌┐┌┌─┐  ┌─┐┬─┐┌┬┐┬┌─┐┬  ┌─┐
    //  ││├┤ │  ├┤  │ ├┤   │ ││││├┤   ├─┤├┬┘ │ ││  │  ├┤ 
    // ─┴┘└─┘┴─┘└─┘ ┴ └─┘  └─┘┘└┘└─┘  ┴ ┴┴└─ ┴ ┴└─┘┴─┘└─┘
    async deleteArticle(id: string): Promise<Article> {
        return await this.articleModel.findByIdAndDelete(id);
    }
}
