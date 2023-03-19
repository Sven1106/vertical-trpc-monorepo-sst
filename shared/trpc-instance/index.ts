import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

export const instance = initTRPC.create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});
/**
 * Protected procedure used across multiple features
 **/
export const protectedProcedure = instance.procedure; //TODO: add .use(middleware)
