import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import jwt from 'src/config/jwt';

console.log('JWT', jwt, jwt(), jwt());

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwt().secrectKey,
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
