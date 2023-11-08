import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  //* 此处不给具体类型会显示 never[] 这个类型
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    setList(["1", "2", "3"]);
  }, []);

  interface HomeProps {
    owner: string;
  }

  // 定义React组件
  const Home: React.FC<HomeProps> = ({ owner }) => {
    return <>Home of {owner}</>;
  };

  const App1: React.FC = () => {
    return <Home owner="11"></Home>;
  };

  const App2: React.FC = () => {
    return <Home owner="66"></Home>; //owner 只能是字符串类型
  };
  return (
    <>
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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <hr />
      <App1 />
      <App2 />
      <hr />

      <ul>
        {list.map((ele, i) => {
          return <li key={i}>{ele}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
