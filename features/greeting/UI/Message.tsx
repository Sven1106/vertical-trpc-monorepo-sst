import { createTRPCReact } from '@trpc/react-query';
import { greetingRouter } from '../router';

type Router = typeof greetingRouter;
// This is the strongly-typed React hook that will be used in Web and the features UI components
const greetingRouterHook = createTRPCReact<Router>();
export const Message = () => {
  const { data, isLoading } = greetingRouterHook.greeting.useQuery({
    name: 'world',
  });
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (data) {
    return <h1>{data.text}</h1>;
  }
  return <h1>error</h1>;
};
