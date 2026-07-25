import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const runSwagger = (app: INestApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('Stalor API')
    .setDescription('API documentation for the Stalor Auth Service')
    .setVersion('1.0')
    .addTag('Auth')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/v1', app, document);
};
