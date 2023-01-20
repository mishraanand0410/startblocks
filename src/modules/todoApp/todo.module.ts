import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ToDoAppController } from "./todo.controller";
import { toDoDTO } from "./todo.dto";
import { ToDoAppService } from "./todo.service";

@Module({
    imports:[SequelizeModule.forFeature([toDoDTO])],
    providers: [ToDoAppService],
    controllers: [ToDoAppController]
})
export class ToDoModule {}