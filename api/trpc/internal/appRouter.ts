import { instance } from '../index';
import { greetingProcedure } from '@features/greeting/procedure';

// Add all procedures here
const procedures = {
  ...greetingProcedure,
};

// The appRouter consists of procedures that functions as the "schema" for our TRPC API.
export const appRouter = instance.router(procedures);
