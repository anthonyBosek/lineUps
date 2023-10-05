import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { X_AUTH_TOKEN } from "../config";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [params, setParams] = useState({ selector: "persons", id: 8004 });
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(X_AUTH_TOKEN);
    const { selector, id } = params;
    fetch(`https://api.football-data.org/v4/${selector}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": X_AUTH_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {console.log(data)}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
