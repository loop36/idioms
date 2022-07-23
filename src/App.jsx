import { useState } from "react";

import Card from "./components/Card";
import "./App.css";
//import data from "./assets/idioms.json"
import { useEffect } from "react";
function App() {
  const [index, setIndex] = useState(0);
  
  useEffect(()=>{
   randomIdiom();
  },[])
  const randomIdiom= ()=> {
    setIndex(Math.floor(Math.random() * data.length));
    console.log("executed")
  }
  return (
    <div className="App">
      <h2 style={{ color: "rgba(230,230,230,1)"}}>Idioms for Day</h2>
      <Card click={randomIdiom}>
        <h1 style={{ color: "rgba(255,255,210,1)" } }>{data[index].title}</h1>
        <p style={{ color: "rgba(255,255,210,1)" }}>{data[index].desc}</p>
      </Card>
      
    </div>
  );
}

export default App;
