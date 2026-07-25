import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LogInDto {
  @ApiProperty({
    example: 'habibrifatx21@gmail.com',
    description: 'provide registered email',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'password123',
    description: 'provide password',
  })
  @IsNotEmpty()
  @IsString()
  password!: string;
}
