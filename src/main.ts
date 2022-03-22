import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Bridge } from '@synapseprotocol/sdk'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);

  const bridge = new Bridge.SynapseBridge({network: 1});
  
}
bootstrap();
