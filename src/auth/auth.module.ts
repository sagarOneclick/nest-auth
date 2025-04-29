import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { User } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService,LocalStrategy,JwtStrategy],
  imports: [JwtModule.register({
    secret: 'secret'  ,
    signOptions:{expiresIn:'60s'}
  }),TypeOrmModule.forFeature([User])]
})
export class AuthModule {}
