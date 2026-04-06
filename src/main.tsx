import React from "react";
import ReactDOM from "react-dom/client";
import Lenis from "lenis";
import AnimatedCursor from "react-animated-cursor";

import App from "./App";
import "./index.css";

const lenis = new Lenis();

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimatedCursor />
    <App />
  </React.StrictMode>
);