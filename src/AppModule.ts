import { Module } from '@nestjs/common';
import { AuthController } from 'Controller/AuthController';
import { AppController } from './AppController';
import { PrismaService } from './Prisma/PrismaService';

@Module({
  imports: [],
  controllers: [AppController,AuthController],
  providers:[PrismaService],

})
export class AppModule {}
