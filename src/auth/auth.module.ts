import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtService],
  imports: [JwtModule.register({
    secret: process.env.Jwt_Secret  ,
    signOptions:{expiresIn:'3600s'}
  })]
})
export class AuthModule {}
