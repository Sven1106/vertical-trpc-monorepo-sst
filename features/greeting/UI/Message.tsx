import { appRouterHook } from '@api/trpc/appRouterClients';
export const Message = () => {
  const { data, isLoading } = appRouterHook.greeting.useQuery({ name: 'world' });
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (data) {
    return <h1>{data.text}</h1>;
  }
  return <h1>error</h1>;
};
