import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllControllers } from './modules/consts/controller.const';
import { MicroserviceClientsModule } from './modules/mods/microserviceClients.module';

@Module({
  imports: [MicroserviceClientsModule],
  controllers: [AppController, ...AllControllers],
  providers: [AppService],
})
export class AppModule {}
