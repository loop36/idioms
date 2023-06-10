import { useState } from "react";

import Card from "./components/Card";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [index, setIndex] = useState(0);
  const [idioms,setIdioms]= useState([]);
  useEffect(()=>{
   randomIdiom();
   axios.get("idioms.json").then((idiomsData)=>{
      setIdioms(idiomsData.data)
   })
  },[])
  const randomIdiom= ()=> {
    if(idioms.length!=0){
    setIndex(Math.floor(Math.random() * idioms.length));
    
    }
    else{
      setIndex(Math.floor(Math.random() * 1200));
    }
  }
  return (
    <div className="App">
      {idioms.length==0?null:<>
      <h2 style={{ color: "rgba(230,230,230,1)"}}>Idioms for Day</h2>
      <Card click={randomIdiom}>
        <h1 style={{ color: "rgba(255,255,210,1)" } }>{idioms[index].title}</h1>
        <p style={{ color: "rgba(255,255,210,1)" }}>{idioms[index].desc}</p>
        
      </Card>
      </>}
      
    </div>
  );
}

export default App;
