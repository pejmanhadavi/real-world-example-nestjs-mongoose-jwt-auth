import { Document } from 'mongoose';

export interface Article extends Document {
    title: string,
    body: string,
};