import React, { useState } from 'react'
import Form from '../component/Form'
import Navbar from '../component/Navbar'
import Disclaimer from '../component/Disclaimer'

const Main = () => {
  const [modelOn,setModelOn] = useState(true);
  return (
    <div className={`relative border-red-500 w-[100%] h-[90vh] ${modelOn ? "overlay" : ""}  text-white overflow-hidden`}>
     
     {
      modelOn && <Disclaimer setModelOn={setModelOn} />
     }
      
    
      
      
        <Form />
    </div>
  )
}

export default Main