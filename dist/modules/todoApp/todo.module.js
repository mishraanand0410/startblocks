"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const todo_controller_1 = require("./todo.controller");
const todo_dto_1 = require("./todo.dto");
const todo_service_1 = require("./todo.service");
let ToDoModule = class ToDoModule {
};
ToDoModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([todo_dto_1.toDoDTO])],
        providers: [todo_service_1.ToDoAppService],
        controllers: [todo_controller_1.ToDoAppController]
    })
], ToDoModule);
exports.ToDoModule = ToDoModule;
//# sourceMappingURL=todo.module.js.map