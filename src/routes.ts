import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function CreateCourse(request: Request, response: Response){
    const { name, educator, duration } = request.body

    CreateCourseService.execute({
        name,
        educator,
        duration
    })

    response.send()
}