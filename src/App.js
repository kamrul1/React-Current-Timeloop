import React, { useState } from "react";
import "./styles.css";

function LoopTime() {
  let CurrentTime = () => new Date().toLocaleTimeString();
  const [myTimer, SetMyTimer] = useState(CurrentTime);
  setInterval(() => {
    SetMyTimer(CurrentTime);
  }, 1000);

  return <pre>{myTimer}</pre>;
}

export default function App() {
  return (
    <>
      <input />
      <p>
        Current Time:
        <LoopTime />
      </p>
    </>
  );
}
