import React, { useState } from "react";
import "./App.css";
import Intro from "src/pages/Intro";
import About from "src/pages/About";
import Skills from "src/pages/Skills";
import Projects from "src/pages/Projects";
import Message from "src/pages/Message";
import { AlertTypes } from "src/config/types";
import Navbar from "src/components/Navbar";
import projects from "./info/projects";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import IconButton from "@mui/material/IconButton";
import MyAlert from "src/components/MyAlert";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [visibility, setVisibility] = useState(false);
  const [alert, setAlert] = useState<AlertTypes>({
    open: false,
    message: "",
    type: "info",
  } as AlertTypes);

  const appRef = React.useRef<HTMLDivElement>(null);

  function moveToTop() {
    // On desktop (>=900px) `.App` is the scroll container; elsewhere the window scrolls.
    const scroller =
      appRef.current && appRef.current.scrollHeight > appRef.current.clientHeight
        ? appRef.current
        : window;
    scroller.scrollTo({ top: 0, behavior: "smooth" });
  }
  React.useEffect(() => {
    const getScrollTop = () =>
      appRef.current && appRef.current.scrollTop > 0
        ? appRef.current.scrollTop
        : document.documentElement.scrollTop;
    const visible = () => {
      setVisibility(getScrollTop() > window.innerHeight);
    };
    window.addEventListener("scroll", visible);
    appRef.current?.addEventListener("scroll", visible);
    const node = appRef.current;
    return () => {
      window.removeEventListener("scroll", visible);
      node?.removeEventListener("scroll", visible);
    };
  }, []);

  return (
    <div className="App" ref={appRef}>
      <Navbar />
      <MyAlert alert={alert} setAlert={setAlert} />
      <Intro />
      <About myClass="next" setAlert={setAlert} />
      <Skills myClass="box" />
      <Projects myClass="next" id="Projects" projectSlice={projects.slice(0, 2)} />
      <Projects myClass="box" projectSlice={projects.slice(2, 4)} />
      <Message myClass="next" setAlert={setAlert} />
      {visibility && (
        <IconButton
          className="scroll-top"
          onClick={moveToTop}
          size="large"
          color="secondary"
        >
          <ArrowCircleUpOutlinedIcon fontSize="large" />
        </IconButton>
      )}
      <Analytics />
    </div>
  );
}

export default App;
