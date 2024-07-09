import React, { useState } from 'react'
import Form from '../component/Form'
import Navbar from '../component/Navbar'
import Disclaimer from '../component/Disclaimer'
import Youtube from '../component/Youtube'

const Main = () => {
  const [modelOn,setModelOn] = useState(true);
  return (
    <div className={`relative w-[100%] h-[100vh] ${modelOn ? "overlay" : ""}  text-white overflow-hidden`}>

      {/* <Youtube /> */}
     
     {
      modelOn && <Disclaimer setModelOn={setModelOn} />
     }
      
    
      
      
        <Form />
    </div>
  )
}

export default Main