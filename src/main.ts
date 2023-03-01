import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Apply the ValidationPipe globally in our main.ts file
app.useGlobalPipes(
  new ValidationPipe({
    whitelist:true,
    transform:true,
    forbidNonWhitelisted: true //to give error message for unwanted key values in body
  }),
);
  await app.listen(3000);
}
bootstrap();
