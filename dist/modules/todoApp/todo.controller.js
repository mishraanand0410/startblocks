"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoAppController = void 0;
const common_1 = require("@nestjs/common");
const todo_dto_1 = require("./todo.dto");
const todo_service_1 = require("./todo.service");
let ToDoAppController = class ToDoAppController {
    constructor(toDoAppService) {
        this.toDoAppService = toDoAppService;
    }
    async newToDoTask(response, toDoDTO) {
        const newToDoTask = await this.toDoAppService.createnewToDoTask(toDoDTO);
        return response.status(common_1.HttpStatus.CREATED).json({
            newToDoTask
        });
    }
    async fetchAll(response) {
        const toDoTasks = await this.toDoAppService.findAll();
        return response.status(common_1.HttpStatus.OK).json({
            toDoTasks
        });
    }
    async findById(response, id) {
        const toDoTask = await this.toDoAppService.findOne(id);
        return response.status(common_1.HttpStatus.OK).json({
            toDoTask
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, todo_dto_1.toDoDTO]),
    __metadata("design:returntype", Promise)
], ToDoAppController.prototype, "newToDoTask", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ToDoAppController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ToDoAppController.prototype, "findById", null);
ToDoAppController = __decorate([
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [todo_service_1.ToDoAppService])
], ToDoAppController);
exports.ToDoAppController = ToDoAppController;
//# sourceMappingURL=todo.controller.js.map