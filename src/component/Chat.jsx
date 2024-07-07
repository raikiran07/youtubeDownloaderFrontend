import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Chat = () => {

    const [prompt,setPrompt] = useState("")
    const [reply,setReply] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/api/chat',{prompt});
        setReply(res.data.choices[0].message.content);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='enter your query' 
                value={prompt}
                onChange={(e)=>setPrompt(e.target.value)}
                />
            </div>
            <button type='submit'>send</button>
        </form>
        <div>
            <p>
                {reply}
            </p>
        </div>
    </div>
  )
}

export default Chat