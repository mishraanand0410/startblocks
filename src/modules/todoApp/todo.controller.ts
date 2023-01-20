import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { toDoDTO } from "./todo.dto";
import { ToDoAppService } from "./todo.service";

@Controller('todo')
export class ToDoAppController {
    constructor(private readonly toDoAppService: ToDoAppService){}

    @Post()
    async newToDoTask(@Res() response, @Body() toDoDTO: toDoDTO) {
        const newToDoTask = await this.toDoAppService.createnewToDoTask(toDoDTO);
        return response.status(HttpStatus.CREATED).json({
            newToDoTask
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const toDoTasks = await this.toDoAppService.findAll();
        return response.status(HttpStatus.OK).json({
            toDoTasks
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const toDoTask = await this.toDoAppService.findOne(id);
        return response.status(HttpStatus.OK).json({
            toDoTask
        })
    }
}