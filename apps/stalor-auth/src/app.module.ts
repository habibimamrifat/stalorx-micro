import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthCoreModule } from './modules/authCore/authCore.module';

@Module({
  imports: [AuthCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
