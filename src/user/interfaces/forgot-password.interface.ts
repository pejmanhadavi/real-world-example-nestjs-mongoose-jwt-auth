import { Document } from 'mongoose';

export interface ForgotPassword extends Document {
    email: string;
    verification: string;
    firstUsed: boolean;
    finalUsed: boolean;
    expires: Date;
    ipRequest: string;
    browserRequest: string;
    countryRequest: string;
    ipChanged: string;
    browserChanged: string;
    countryChanged: string;
}
