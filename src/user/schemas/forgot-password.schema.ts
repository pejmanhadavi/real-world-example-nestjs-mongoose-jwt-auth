import { Schema } from 'mongoose';
import * as validator from 'validator';

export const ForgotPasswordSchema = new Schema ({
    email: {
        required: [true, 'EMAIL_IS_BLANK'],
        type: String,
        requierd: true,
    },
    verification: {
        type: String,
        validate: validator.isUUID,
        requierd: true,
    },
    firstUsed: {
        type: Boolean,
        default: false,
    },
    finalUsed: {
        type: Boolean,
        default: false,
    },
    expires: {
        type: Date,
        requierd: true,
    },
    ip: {
        type: String,
        requierd: true,
    },
    browser: {
        type: String,
        requierd: true,
    },
    country: {
        type: String,
        requierd: true,
    },
    ipChanged: {
        type: String,
    },
    browserChanged: {
        type: String,
    },
    countryChanged: {
        type: String,
    },
},
{
    versionKey: false,
    timestamps: true,
});
