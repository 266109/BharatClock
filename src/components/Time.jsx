import { useEffect } from "react";
import { useState } from "react";

function Time() {
  const [Time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let tim = new Date();
  return (
    <div id="time" className="text-center">
      This is the current time : {Time.toLocaleTimeString()} -{" "}
      {Time.toLocaleDateString()}
    </div>
  );
}

export default Time;
