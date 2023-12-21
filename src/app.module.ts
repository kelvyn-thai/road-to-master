import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import defaultConfig from './config/configuration';
import databaseConfig from './config/database';
import jwtConfig from './config/jwt';
import { validate as validateConfiguration } from './validate/configuration';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [defaultConfig, databaseConfig, jwtConfig],
      cache: true,
      validate: validateConfiguration,
      validationOptions: {
        allowUnknown: false,
        abortEarly: true,
      },
    }),
  ],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
