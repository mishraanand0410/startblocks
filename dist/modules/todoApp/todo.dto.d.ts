import { Model } from "sequelize-typescript";
export declare class toDoDTO extends Model {
    id: number;
    title: string;
    Description: string;
    dueDate: number;
    priority: 'High' | 'Medium' | 'Low';
}
