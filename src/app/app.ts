import express from 'express'
import morgan from 'morgan'
import indexRoute from '@routes/index.route'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'hello world!' })
})
app.use('/', indexRoute)
app.use(morgan('dev'))

export default app
