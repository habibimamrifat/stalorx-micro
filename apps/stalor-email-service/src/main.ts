import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const parsedPort = Number(process.env.PORT);
  const port = Number.isNaN(parsedPort) ? 3002 : parsedPort;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port,
      },
    },
  );

  await app.listen();

  console.log(`Mail Microservice is listening on port ${port}`);
}

bootstrap();
