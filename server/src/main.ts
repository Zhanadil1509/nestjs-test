import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module';
import { join } from 'path'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as packageJson from '../package.json'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats description')
    .setVersion(packageJson.version)
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  })
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views')
  })
  await app.listen(8080, '0.0.0.0');
}
bootstrap();
