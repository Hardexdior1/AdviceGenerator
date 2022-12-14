import { useEffect, useState } from "react";
import "./App.css";
  import divide1 from'./images/pattern-divider-mobile.svg'
  import dice from'./images/icon-dice.svg'

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let fetchData = async (url) => {
      let response = await fetch(url);
      let receivedData = await response.json();
      console.log(receivedData);
      setData(receivedData);
      setLoading(false);
    };
    fetchData("https://api.adviceslip.com/advice");
  }, []);

  return <div className="App">{loading ? <p>loading...</p> : 
  
  <div className="div1">
    <p><span>Advice   #{ data.slip.id}</span>  </p> 
    <p>{data.slip.advice}</p>
    <div className="imgdiv"><img src={divide1} alt="" /></div>

     </div>}
     <div className=""><img className="dice" src={dice} alt="" /></div>

  </div>;
}

export default App;
