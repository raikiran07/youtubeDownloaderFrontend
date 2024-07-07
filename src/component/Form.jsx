import React, { useState } from 'react'
import axios from 'axios';
import Loader from '../assets/loader1.gif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [url,setUrl] = useState("");
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState("")
    const [downloadUrl,setDownloadUrl] = useState("select any video")

    const handleDownload = async (e)=> {
        e.preventDefault();
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/
        const isValidUrl = youtubeRegex.test(url)
       
        if(isValidUrl){
            setIsLoading(true)
            console.log(url)
           
            try {
                const res = await axios.get(`https://youtubedownloaderbackend.onrender.com/download?url=${url}`)
                console.log(res);
                console.log(res.data)
                setData(res.data);
                setIsLoading(false)
                
    
            } catch (error) {
                setIsLoading(false)
                console.log(error)
                alert("something went wrong")
                console.log("something went wrong...")
            }

        }
        else{
           toast.error("Enter valid url")
        }
       
    }

    // download video method
    const downloadVideo = () => {
        
    }


  return (
    <div>
        <form onSubmit={handleDownload} className='max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mx-auto mt-8 text-center p-2'>
           
            <div className='mt-8 border-4 border-dotted rounded-md'>
                <input 
                type="text" placeholder='paste youtube video link'
                value={url}
                onChange={(e)=>setUrl(e.target.value)}
                className='border min-w-[90%] min-h-[80px] my-4 p-2 rounded-md text-black text-xl'
                 />
            </div>
            <button type='submit' className='border py-[5px] px-[10px] mt-4 bg-blue-600 text-white rounded-md'>Search</button>
        </form>
        {
            data.url ?   <iframe
            className='md:min-w-[640px] md:min-h-[300px] border mx-auto mt-4'
            src={`${data.url}`}
            title="video"
          />
          :(
             !isLoading && <p className='text-center mt-4'>Your will get options here to download</p>
          )
          
        }
      

        {
            isLoading ? (
                <div className='text-center text-white text-2xl mt-4'>
                   <p>Loading...</p>
                </div> 
            ) : (
                <div>
                <div className="grid-container hidden max-w-[90%] md:max-w-[45%] mx-auto mt-4 md:grid md:grid-cols-4">
                    {
                        data?.info?.map(video=>{
                            if(video.hasAudio && video.hasVideo){
                                return(
                                    <a href={`${video.url}`} target='_blank'>
                                         <button className='border p-1 rounded-md bg-gray-200 text-black'>
        
                                        {video.mimeType.split(";")[0] + "   "}
                                        {video.hasVideo ? video.height + "p" : ""}
                                        </button>
                                    </a>
                                   
                                )
                            }
                           
                        })
                    }
                </div>
    
                <div className="mobile-grid text-center mt-8 text-black">
                    {
                        data?.info?.length > 0 && <div>
                            <select name="video" className='border p-2 rounded-md' value={downloadUrl} onChange={(e)=>setDownloadUrl(e.target.value)}>
                        {
                            data?.info?.map(video=>{
                                if(video.hasAudio && video.hasAudio){
                                    return(
    
                                  
                                        <option value={`${video.url}`}>
                                        <a href={`${video.url}`} target='_blank'>
                                        {video.mimeType.split(";")[0] + "   "}
                                        {video.hasVideo ? video.height + "p" : ""}
                                        </a>
                                        </option>
                                       
                                     )
                                }
                              
                            })
                        }
                        
                    </select>
                    <a href={downloadUrl} target='_blank'>
                    <button className='border p-[7px] ml-2 bg-blue-600 text-white rounded-md'>
                        download
                    </button>
                    </a>
                        </div>
                    }
                    
                    
    
                </div>
                
            </div>
            )
        }
        
        <ToastContainer 
        position='top-center'
         />
       
    </div>
  )
}

export default Form