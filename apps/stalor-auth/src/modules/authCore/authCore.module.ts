import { Module } from '@nestjs/common';
import { AuthCoreService } from './authCore.service';
import { AuthCoreController } from './authCore.controller';

@Module({
  imports: [],
  controllers: [AuthCoreController],
  providers: [AuthCoreService],
})
export class AuthCoreModule {}
