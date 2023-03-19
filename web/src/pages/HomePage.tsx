import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import { Message as FarewellMessage } from '@features/farewell/UI/Message';
import { Message as GreetingMessage } from '@features/greeting/UI/Message';

const viteApiUrl = import.meta.env.VITE_API_URL;
export const HomePage = () => {
  const [count, setCount] = useState('0');
  function onClick() {
    fetch(viteApiUrl, {
      method: 'POST',
    })
      .then((response) => response.text())
      .then((response) => setCount(response))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <GreetingMessage />
      <div className="card">
        <button onClick={onClick}>count is {count}</button>
      </div>
      <FarewellMessage />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
