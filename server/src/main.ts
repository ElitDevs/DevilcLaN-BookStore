import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { Logger } from '@nestjs/common';
import 'dotenv/config';
const port = process.env.PORT || 8080;
async function bootstrap() {
  console.log(port);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  await app.listen(port);
  Logger.log(
    `Server is running on http://localhost:${port}`,
    'main.ts/Bootstrap()',
  );
}
bootstrap();
