import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import {readFileSync} from 'fs'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          // brokers: ['localhost:9092'],
          brokers:['rc1a-qcqk5g0b44iq8cns.mdb.yandexcloud.net:9091'],
          ssl: {
            rejectUnauthorized: false,
            ca: [readFileSync('/usr/local/share/ca-certificates/Yandex/YandexCA.crt', 'utf-8')],
           
          },
          sasl: {
            mechanism: 'scram-sha-512', // scram-sha-256 or scram-sha-512
            username: 'test',
            password: 'rootroot',
          },
        },
        consumer: {
          groupId: 'auth-consumer',
        },
      },
    },
  );
  app.listen();
}
bootstrap();