import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MicroserviceClients } from '../consts/clients.const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MicroserviceClients.AUTH_SERVICE,
        transport: Transport.TCP,
        options: {
          // host: process.env.AUTH_SERVICE_HOST || 'localhost',
          // Uncomment if running on another machine
          port: Number(process.env.AUTH_SERVICE_PORT || 3001),
        },
      },
      {
        name: MicroserviceClients.EMAIL_SERVICE,
        transport: Transport.TCP,
        options: {
          // host: process.env.EMAIL_SERVICE_HOST || 'localhost',
          // Uncomment if running on another machine
          port: Number(process.env.EMAIL_SERVICE_PORT || 3002),
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class MicroserviceClientsModule {}
