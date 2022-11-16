import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { PrismaService } from 'Prisma/PrismaService';
import { AppModule } from './AppModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)

  app.useGlobalPipes(new ValidationPipe({
    enableDebugMessages:true
  }));

  await app.listen(3000);
}
bootstrap();
