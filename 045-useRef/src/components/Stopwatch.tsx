import { useRef, useState } from "react";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const intervalId = useRef<number>();

  function start() {
    intervalId.current = window.setInterval(
      () => setTime((prev) => prev + 1),
      1000
    );
  }

  function stop() {
    clearInterval(intervalId.current);
  }

  return (
    <div>
      {time}
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};
