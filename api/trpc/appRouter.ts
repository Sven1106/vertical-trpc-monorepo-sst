import { farewellRouter } from '@features/farewell/router';
import { greetingRouter } from '@features/greeting/router';
import { instance } from '@shared/trpc-instance/index';

export const appRouter = instance.mergeRouters(greetingRouter, farewellRouter); // Could this be generated?
