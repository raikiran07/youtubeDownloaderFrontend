import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [url,setUrl] = useState("");
    const [data,setData] = useState([])

    const handleDownload = async (e)=> {
        e.preventDefault();
        console.log(url)
        try {
            const res = await axios.get(`https://youtubedownloaderbackend.onrender.com/download?url=${url}`)
            console.log(res);
            console.log(res.data)
            setData(res.data);
        } catch (error) {
            console.log("something went wrong...")
        }
    }
  return (
    <div>
        <form onSubmit={handleDownload}>
            <div>
                <input 
                type="text" placeholder='paste youtube video link'
                value={url}
                onChange={(e)=>setUrl(e.target.value)}
                 />
            </div>
            <button type='submit'>Download</button>
        </form>
        {
            data.url ?   <iframe
            width="570"
            height="320"
            src={`${data.url}`}
            title="video"
          />
          :
          <p>Downloading youtube video is illegal</p>
        }
      

        <div>
            <div className="grid-container">
                {
                    data?.info?.map(video=>{
                        return(
                            <a href={`${video.url}`} target='_blank'>
                                 <button>

                                {video.mimeType.split(";")[0] + "   "}
                                {video.hasVideo ? video.height + "p" : ""}
                                </button>
                            </a>
                           
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Form