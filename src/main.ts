import { NestFactory } from '@nestjs/core';
import { AppModule } from './users/users.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log('app is listening port 3000');
}
bootstrap();
