import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { LoginUserEntity } from '@modules/users/constants/users.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOne(email);
    const passwordIsMatch = await argon2.verify(user.password, password);

    if (user && passwordIsMatch) {
      return user;
    }

    throw new UnauthorizedException('User or password are incorrect');
  }

  async login(user: LoginUserEntity) {
    const { id, email } = user;
    return {
      id,
      email,
      token: this.jwtService.sign({ id: user.id, email: user.email }),
    };
  }
}
