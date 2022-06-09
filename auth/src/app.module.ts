import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule,
    MongooseModule.forRoot('mongodb://valera:zzxcz@62.152.32.71:27017/myself?authMechanism=SCRAM-SHA-1')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
