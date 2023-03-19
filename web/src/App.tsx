import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { useState } from 'react';
import superjson from 'superjson';
import './App.css';
import { HomePage } from './pages/HomePage';
import { appRouter } from '@api/trpc/appRouter';

type AppRouter = typeof appRouter;
const appRouterHook = createTRPCReact<AppRouter>();
const viteApiUrl = import.meta.env.VITE_API_URL;
function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    appRouterHook.createClient({
      links: [
        httpBatchLink({
          url: viteApiUrl + '/trpc',
        }),
      ],
      transformer: superjson,
    }),
  );
  return (
    <appRouterHook.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <HomePage />
        </div>
      </QueryClientProvider>
    </appRouterHook.Provider>
  );
}

export default App;
