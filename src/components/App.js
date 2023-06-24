import React, { useState } from "react";
import SearchLabel from "./SearchLabel";
import callApi from "../api/api";
import ImageList from "./ImageList";
import "./appStyles.css";

const App = ()=>{
  const [images,setImages] = useState([])
  const [loading,setLoading] = useState(false)
  const [msg,setMsg] = useState('')

  const handleOnChange = async(msg) =>{
    try{
        setLoading(true)
          const response = await callApi.get("/search/photos", {
          params: { query: msg },
          });
          setMsg(msg)
          setTimeout(()=>{
            setLoading(false)
            setImages(response.data.results)
          },1000)
          
      }
      catch(e){
        setLoading(false)
        setImages([])
    }
      }


  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchLabel msg={msg} loading={loading} onChange={handleOnChange}/>
      <ImageList images={images} />
    </div>
  );
}

export default App;