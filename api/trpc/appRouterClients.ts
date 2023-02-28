import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { appRouter } from './internal/appRouter';
import superjson from 'superjson';
const viteApiUrl = import.meta.env.VITE_API_URL;
type AppRouter = typeof appRouter;

// This is the strongly-typed React hook that will be used in Web and the features UI components
export const appRouterHook = createTRPCReact<AppRouter>();

// ?Not sure if this should be in web
export const trpcClient = appRouterHook.createClient({
  links: [
    httpBatchLink({
      url: viteApiUrl + '/trpc',
    }),
  ],
  transformer: superjson,
});
