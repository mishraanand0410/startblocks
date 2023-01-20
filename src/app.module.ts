import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoModule } from './modules/todoApp/todo.module';
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'test',
    database: 'todolist',
    autoLoadModels: true,
    synchronize: true
  }), ToDoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
