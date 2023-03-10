import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModeratorModule } from './Moderator/moderator.module';


@Module({
  imports: [ModeratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
