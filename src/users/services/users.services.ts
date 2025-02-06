import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServices {
  getHello(): string {
    return 'Hello World!';
  }
}
