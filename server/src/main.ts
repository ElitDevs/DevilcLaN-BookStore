import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { Logger } from '@nestjs/common';
import 'dotenv/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  await app.listen(4000);
  Logger.log(
    `Server is running on http://localhost:4000`,
    'main.ts/Bootstrap()',
  );
}
bootstrap();
