import { IsNotEmpty,  IsUUID } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RefreshAccessTokenDto {
    @ApiModelProperty({
        description: 'uuid for refresh token',
        format: 'uuid',
        uniqueItems: true,
      })
    @IsNotEmpty()
    @IsUUID()
    readonly refreshToken: string;
}
