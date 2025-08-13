const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.json())

// POST /suggest - accepts tasks + constraints, returns a mocked AI schedule suggestion
app.post('/suggest', async (req,res)=>{
  const {tasks, constraints} = req.body
  // placeholder: here you'd call an AI / OpenAI API to generate optimized schedule
  // return a simple mock suggestion
  const suggestion = tasks.map((t,i)=> ({...t, start: `2025-08-1${i}T09:00:00Z`, duration_minutes: 60}))
  res.json({ok:true, suggestion})
})

app.listen(3000, ()=> console.log('AI Scheduler backend running on http://localhost:3000'))
