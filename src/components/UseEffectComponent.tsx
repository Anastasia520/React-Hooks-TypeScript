import { useState, useEffect } from "react";

export default function UseEffectComponent() {
  const [timer, setTimer] = useState<number>(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return <>Timer: {timer}</>;
}
