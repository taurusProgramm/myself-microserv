import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from "./app.module";

async function start() {
    const PORT = 3000;
    const app = await NestFactory.create(AppModule);
     app.enableCors({
        origin: 'http://192.168.88.184:3000',
        credentials: true,
      });
    app.useGlobalPipes(new ValidationPipe());
    const config = new DocumentBuilder()
        .setTitle("Myself with microservices")
        .setDescription("Myself API description")
        .setVersion("1.0")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    await app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
}
start();
