import express from 'express'
export const app = express()
import cors from 'cors'

app.use(cors())
app.use(express.json())

app.get('/health', (_, res) => res.json({ status: 'ok' }))