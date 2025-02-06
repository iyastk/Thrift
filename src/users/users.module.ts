import { Module } from '@nestjs/common';
import { UserController } from './controllers/users.controllers';
import { UserServices } from './services/users.services';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserServices],
})
export class AppModule {}
