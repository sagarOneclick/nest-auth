import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private jwtService:JwtService) { }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneWithUsername(username)
    if (user && (await bcrypt.compare(password, user.password))) {
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
      accessToken:this.jwtService.sign(payload)
    }
  }
}
