import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import {readFileSync} from 'fs'

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[ClientsModule.register([
    {
      name: 'AUTH_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'auth',
          // brokers: ['localhost:9092'],
          brokers:['rc1a-qcqk5g0b44iq8cns.mdb.yandexcloud.net:9091'],
          ssl: {
            rejectUnauthorized: false,
            ca: [readFileSync('/usr/local/share/ca-certificates/Yandex/YandexCA.crt', 'utf-8')],
          },
          sasl: {
            mechanism: 'scram-sha-512', // scram-sha-256 or scram-sha-512
            username: 'test',
            password: 'rootroot'
          },
        },
        consumer: {
          groupId: 'auth-consumer',
        },
      },
    },
  ]),]
})
export class AuthModule {}
