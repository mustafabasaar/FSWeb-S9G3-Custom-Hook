import { useState, useEffect } from "react";

function geceModuAc() {
  const [geceModu, setGeceModu] = useState(false);

  useEffect(() => {
    const localStorageValue = localStorage.getItem("geceModu");
    if (localStorageValue) {
      setGeceModu(localStorageValue === "true");
    }
  }, []);

  const toggleGeceModu = () => {
    setGeceModu((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("geceModu", newMode);

      return newMode;
    });
  };
  console.log("buraya geliyo mu data", geceModu);
  return { geceModu, toggleGeceModu };
}

export default geceModuAc;
