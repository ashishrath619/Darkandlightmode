import { useEffect } from "react";
import logo from "./logo.svg";

import "./App.css";
import { ThemeProvider } from "styled-components";
import LightTheme from "./Component/Theme/LightTheme";

import DarkTheme from "./Component/Theme/DarkTheme";
import Container from "./Component/Theme/Container";
import { useDispatch, useSelector } from "react-redux";
import { darkModeAction } from "./Component/Actions/config_action";
function App() {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);
  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem("theme")));
    }
  }, [config.darkMode, dispatch]);
  console.log("config", config);
  const themeColor = (value) => {
    console.log("aa", value);
    window.localStorage.setItem("theme", value);

    dispatch(darkModeAction(value));
  };

  return (
    <ThemeProvider
      theme={config.darkMode === "LightTheme" ? LightTheme : DarkTheme}
    >
      <div style={{ width: "100%", padding: "2rem", backgroundColor: "grey" }}>
        <button
          onClick={() => {
            themeColor("DarkTheme");
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            themeColor("LightTheme");
          }}
        >
          Light
        </button>
      </div>
      <Container className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Container>
    </ThemeProvider>
  );
}

export default App;
