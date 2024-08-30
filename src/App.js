import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const windowResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    };

    window.addEventListener("resize", windowResize);
  },[]);

  return (
    <div className="App">
      <p>Window width: {windowWidth}px</p>
      <p>Window height: {windowHeight}px</p>
    </div>
  );
};

export default App;
