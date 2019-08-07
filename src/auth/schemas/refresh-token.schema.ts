import { Schema } from 'mongoose';

export const RefreshTokenSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    refreshToken: {
        type: String,
        required: true,
    },
    ip: {
        type: String,
        required: true,
    },
    browser: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
},
{
    versionKey: false,
    timestamps: true,
});
