import { Roles } from './../auth/decorators/roles.decorator';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { CreateForgotPasswordDto } from './dto/create-forgot-password.dto';
import { Request } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { Controller, Get, Post, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyUuidDto } from './dto/verify-uuid.dto';
import { UserService } from './user.service';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiUseTags,
    ApiBearerAuth,
    ApiImplicitHeader,
    ApiOperation,
    } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiUseTags('User')
@Controller('user')
@UseGuards(RolesGuard)
export class UserController {
    constructor(
        private readonly userService: UserService,
        ) {}

    // ╔═╗╦ ╦╔╦╗╦ ╦╔═╗╔╗╔╔╦╗╦╔═╗╔═╗╔╦╗╔═╗
    // ╠═╣║ ║ ║ ╠═╣║╣ ║║║ ║ ║║  ╠═╣ ║ ║╣
    // ╩ ╩╚═╝ ╩ ╩ ╩╚═╝╝╚╝ ╩ ╩╚═╝╩ ╩ ╩ ╚═╝
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({title: 'Register user',})
    @ApiCreatedResponse({})
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @Post('verify-email')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Verify Email',})
    @ApiOkResponse({})
    async verifyEmail(@Req() req: Request, @Body() verifyUuidDto: VerifyUuidDto) {
        return await this.userService.verifyEmail(req, verifyUuidDto);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Login User',})
    @ApiOkResponse({})
    async login(@Req() req: Request, @Body() loginUserDto: LoginUserDto) {
        return await this.userService.login(req, loginUserDto);
    }

    @Post('refresh-access-token')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({title: 'Refresh Access Token with refresh token',})
    @ApiCreatedResponse({})
    async refreshAccessToken(@Body() refreshAccessTokenDto: RefreshAccessTokenDto) {
        return await this.userService.refreshAccessToken(refreshAccessTokenDto);
    }

    @Post('forgot-password')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Forgot password',})
    @ApiOkResponse({})
    async forgotPassword(@Req() req: Request, @Body() createForgotPasswordDto: CreateForgotPasswordDto) {
        return await this.userService.forgotPassword(req, createForgotPasswordDto);
    }

    @Post('forgot-password-verify')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Verfiy forget password code',})
    @ApiOkResponse({})
    async forgotPasswordVerify(@Req() req: Request, @Body() verifyUuidDto: VerifyUuidDto) {
        return await this.userService.forgotPasswordVerify(req, verifyUuidDto);
    }

    @Post('reset-password')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({title: 'Reset password after verify reset password',})
    @ApiBearerAuth()
    @ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    })
    @ApiOkResponse({})
    async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        return await this.userService.resetPassword(resetPasswordDto);
    }

    @Get('data')
    @UseGuards(AuthGuard('jwt'))
    @Roles('admin')
    @ApiBearerAuth()
    @ApiOperation({title: 'A private route for check the auth',})
    @ApiImplicitHeader({
        name: 'Bearer',
        description: 'the token we need for auth.'
    })
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({})
    findAll() {
        return this.userService.findAll();
    }
}
