import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';

// banco de dados é criado se não existe
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        join(__dirname, '..', `.env.${process.env.NODE_ENV}`),
        join(__dirname, '..', '.env'),
      ],
    }),
    MongooseModule.forRoot(process.env.MONGO_DSN),
    TweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// /tweets - CRUD

//Root - AppModule

//tweetsmodule
