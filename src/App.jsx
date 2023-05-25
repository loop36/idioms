import { useState } from "react";

import Card from "./components/Card";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [index, setIndex] = useState(0);
  const [idioms, setIdioms] = useState([]);
  useEffect(() => {
    randomIdiom();
    axios.get("idioms.json").then((idiomsData) => {
      setIdioms(idiomsData.data);
    });
  }, []);

  const handleDownload = async () => {
    const zip = new JSZip();
    setLoading(true);
    const sourceUrl =
      "https://dev-static-dc.dot-st.com/post/50/100324/50_100324_1682669145333_1_s.jpeg";
    const response = await fetch(sourceUrl, { mode: "no-cors" });
    const imageBlob = await response.blob();
    zip.file(sourceUrl?.split("/").pop() ?? "unknown", imageBlob);
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(zipBlob);
    downloadLink.download = `image_${Date.now()}.zip`;
    downloadLink.click();
    setLoading(false);
  };
  const randomIdiom = () => {
    if (idioms.length != 0) {
      setIndex(Math.floor(Math.random() * idioms.length));
    } else {
      setIndex(Math.floor(Math.random() * 1200));
    }
  };
  return (
    <div className="App">
      {idioms.length == 0 ? null : (
        <>
          <h2 style={{ color: "rgba(230,230,230,1)" }}>Idioms for Day</h2>
          <Card click={randomIdiom}>
            <h1 style={{ color: "rgba(255,255,210,1)" }}>
              {idioms[index].title}
            </h1>
            <p style={{ color: "rgba(255,255,210,1)" }}>{idioms[index].desc}</p>
          </Card>
          <button onClick={handleDownload}>Download</button>
        </>
      )}
    </div>
  );
}

export default App;
