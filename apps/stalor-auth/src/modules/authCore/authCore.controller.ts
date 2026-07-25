import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('auth-core')
export class AuthCoreController {
  @MessagePattern('log-in')
  logIn(logInData: any) {
    console.log('here i am', logInData);
    return {
      message: 'from auth-service controller',
      data: logInData,
    };
  }
}
