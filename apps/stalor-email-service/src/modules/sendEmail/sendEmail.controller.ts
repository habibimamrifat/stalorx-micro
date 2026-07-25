import { Controller } from '@nestjs/common';
import { SendEmailService } from './sendEmail.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('send-email')
export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}

  @EventPattern('sendEmail.sendConfirmation')
  sendConfirmationEmail(@Payload() payload: any) {
    return {
      message: 'this message is beng sent from pubsub',
      data: payload,
    };
  }
}
