import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Message } from '@features/greeting/UI/Message';
import { appRouterHook, trpcClient } from '@api/trpc/appRouterClients';
const viteApiUrl = import.meta.env.VITE_API_URL;
function App() {
  const [count, setCount] = useState('0');
  function onClick() {
    fetch(viteApiUrl, {
      method: 'POST',
    })
      .then(response => response.text())
      .then(response => setCount(response));
  }
  const [queryClient] = useState(() => new QueryClient());

  return (
    <appRouterHook.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <Message />
          <div className="card">
            <button onClick={onClick}>count is {count}</button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
      </QueryClientProvider>
    </appRouterHook.Provider>
  );
}

export default App;
