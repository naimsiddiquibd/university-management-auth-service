import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
const port = 3000

app.use(express.json())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully!')
})

export default app
