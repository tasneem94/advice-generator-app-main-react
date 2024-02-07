import "./App.css";
import { Heading } from "./Heading";
import { AdviceText } from "./AdviceText";
import { Button } from "./Button";
import { useEffect, useState } from "react";

function App() {
  const [adviceNo, setAdviceNo] = useState(0);
  const [adviceText, setAdviceText] = useState("");
  const url = "https://api.adviceslip.com/advice";

  const fetchNewAdvice = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.slip.id, data.slip.advice);
    setAdviceNo(data.slip.id);
    setAdviceText(data.slip.advice);
  };

  useEffect(() => {
    fetchNewAdvice();
  }, []);

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
