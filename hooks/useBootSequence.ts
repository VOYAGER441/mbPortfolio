import { useState, useEffect } from 'react';

export function useBootSequence() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 1000); // 1 second boot time

    return () => clearTimeout(timer);
  }, []);

  return { isBooting };
}
