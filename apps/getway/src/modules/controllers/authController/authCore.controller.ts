import { Body, Controller, Inject, Post } from '@nestjs/common';
import { MicroserviceClients } from '../../consts/clients.const';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { LogInDto } from './dtos/LogIn.dto';

@ApiTags('Authentication')
@Controller('auth-core')
export class AuthCoreController {
  constructor(
    @Inject(MicroserviceClients.AUTH_SERVICE)
    private authServiceClient: ClientProxy,
  ) {}

  @Post('/log-in')
  logIn(@Body() logInData: LogInDto) {
    return this.authServiceClient.send('log-in', logInData);
  }
}
