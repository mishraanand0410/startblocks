import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { toDoDTO } from "./todo.dto";
@Injectable()
export class ToDoAppService {
    constructor(
        @InjectModel(toDoDTO)
        private toDoModel: typeof toDoDTO
    ) {}

    async findAll(): Promise<toDoDTO[]> {
        return this.toDoModel.findAll();
    }

    findOne(id: string): Promise<toDoDTO> {
        return this.toDoModel.findOne({
            where: {
                id,
            },
        });
    }

    async createnewToDoTask(todotable: any): Promise<toDoDTO> {
        //console.log("this.toDoModel.create(toDoList)",this.toDoModel.create(toDoList))
        return this.toDoModel.create(todotable);
    }
}