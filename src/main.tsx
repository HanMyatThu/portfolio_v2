import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Lenis from "lenis";
import AnimatedCursor from "react-animated-cursor";

const lenis = new Lenis();

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="14,165,233"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
    />
    <App />
  </React.StrictMode>
);