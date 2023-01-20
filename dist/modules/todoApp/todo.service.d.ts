import { toDoDTO } from "./todo.dto";
export declare class ToDoAppService {
    private toDoModel;
    constructor(toDoModel: typeof toDoDTO);
    findAll(): Promise<toDoDTO[]>;
    findOne(id: string): Promise<toDoDTO>;
    createnewToDoTask(todotable: any): Promise<toDoDTO>;
}
