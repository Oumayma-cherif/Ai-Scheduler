import React, {useState} from 'react'

export default function App(){
  const [tasks, setTasks] = useState([{id:1,title:'Task A'},{id:2,title:'Task B'}])
  const [suggestion, setSuggestion] = useState(null)
  async function askAI(){
    const res = await fetch('http://localhost:3000/suggest',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({tasks, constraints:{}})})
    const body = await res.json()
    setSuggestion(body.suggestion)
  }
  return (<div style={{padding:20}}>
    <h1>AI Scheduler (Starter)</h1>
    <button onClick={askAI}>Get suggestion (mock)</button>
    <pre>{JSON.stringify(suggestion, null, 2)}</pre>
  </div>)
}
