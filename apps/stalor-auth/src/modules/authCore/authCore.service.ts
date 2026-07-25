import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthCoreService {
  getHello() {
    return {
      message: 'Auth Core Service is running',
    };
  }
}
