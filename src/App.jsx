import "./App.css";
import { Heading } from "./Heading";
import { AdviceText } from "./AdviceText";
import { Button } from "./Button";
import { useState } from "react";

function App() {
  const [adviceNo, setAdviceNo] = useState(176);
  const [adviceText, setAdviceText] = useState(
    "Good things come to those who wait"
  );
  const url = "https://api.adviceslip.com/advice";
  const fetchNewAdvice = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.slip.id, data.slip.advice);
    setAdviceNo(data.slip.id);
    setAdviceText(data.slip.advice);
  };
  return (
    <div className="container">
      <Heading adviceNo={adviceNo} />
      <AdviceText adviceText={adviceText} />
      <div className="pattern-divider"></div>
      <Button fetchNewAdvice={fetchNewAdvice} />
    </div>
  );
}

export default App;
