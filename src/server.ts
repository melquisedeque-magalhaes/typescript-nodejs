import express from 'express'
import { CreateCourse } from './routes'

const app = express()
app.use(express.json())

app.post('/', CreateCourse)

app.listen(3333, () => {
    console.log('Server Run ! 🚀')
})