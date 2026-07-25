import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const parsedPort = Number(process.env.PORT);
  const port = Number.isNaN(parsedPort) ? 3002 : parsedPort;

  const appTCP = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: { port },
    },
  );

  const appRedis = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
  );

  await Promise.all([appTCP.listen(), appRedis.listen()]);

  console.log(`Mail TCP Microservice is listening on port ${port}`);
  console.log(`Mail Redis Microservice is listening on localhost:6379`);
}

bootstrap();
