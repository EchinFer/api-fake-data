import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParameterController } from './controllers/parameter.controller';
import { ParameterService } from './services/parameterService.service';

@Module({
  imports: [],
  controllers: [AppController, ParameterController],
  providers: [AppService, ParameterService],
})
export class AppModule {}
