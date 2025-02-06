import { Controller, Get, Post } from '@nestjs/common';
import { UserServices } from '../services/users.services';

@Controller('api/users')
export class UserController {
  constructor(private readonly authService: UserServices) {}
  @Post('signup')
  signup() {
    return { message: 'hello' };
  }

  @Post('signin')
  signin() {
    return { message: 'hello' };
  }

  @Post('signout')
  signout() {
    return { message: 'hello' };
  }

  @Get('current')
  current() {
    return { message: 'hello' };
  }
}
