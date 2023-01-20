import { Column, Model, Table } from "sequelize-typescript";

@Table
export class toDoDTO extends Model {
    
    @Column({ primaryKey:true })
    id: number;

    @Column
    title: string;

    @Column
    Description: string;

    @Column
    dueDate: number;

    @Column
    priority: 'High' | 'Medium' | 'Low'
}