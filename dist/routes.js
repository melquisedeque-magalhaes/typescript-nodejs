"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
var CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function CreateCourse(request, response) {
    var _a = request.body, name = _a.name, educator = _a.educator, duration = _a.duration;
    CreateCourseService_1.default.execute({
        name: name,
        educator: educator,
        duration: duration
    });
    response.send();
}
exports.CreateCourse = CreateCourse;
