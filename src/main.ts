import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Birden fazla multiple pipe tanımlaya biliriz.
  //  product.controller içinde yer alan CreateProductDTO valitation sağlar. Örnek: @IsNotEmpty()  @IsString()
  app.useGlobalPipes(new ValidationPipe());
   // register global middleware here
  // app.use(cors(), helmet(), mogran(), multer())
  await app.listen(3000);
}
bootstrap();

