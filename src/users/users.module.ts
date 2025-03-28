import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UserController } from './controller/users.controller';

@Module({
  providers: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}
