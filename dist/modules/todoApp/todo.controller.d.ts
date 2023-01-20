import { toDoDTO } from "./todo.dto";
import { ToDoAppService } from "./todo.service";
export declare class ToDoAppController {
    private readonly toDoAppService;
    constructor(toDoAppService: ToDoAppService);
    newToDoTask(response: any, toDoDTO: toDoDTO): Promise<any>;
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
}
