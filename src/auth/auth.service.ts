import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private jwtService:JwtService) { }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneWithUsername(username)
    if (user && password===user.password) {
      const { password, ...userDetails } = user
      return userDetails
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      username:user.userName
    }

    return {
      ...user,
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload,{expiresIn:'7d'})
    }
  }

  async refreshToken(user: User) {
    const payload = {
      username: user.userName
    }

    return {
      accessToken: this.jwtService.sign(payload),
    }
  }
}
