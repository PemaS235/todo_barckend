import express, {Express} from 'express'
import dotenv from 'dotenv'

import cors from 'cors'
import authRoutes from './routes/auth.route'
import todoRoutes from './routes/to-do.route'
//  Load environment variables
dotenv.config()
    
//  Initialize Express app
const app: Express = express()

//  Middleware
app.use(cors())
app.use(express.json())

//  Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/todo', todoRoutes)

//  Root Route
app.get('/', (req, res) => {
    res.send(`
        API is running...
        Status: Online
        `)
})

export default app