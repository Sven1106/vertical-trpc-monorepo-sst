import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { appRouter } from './appRouter';

// This is the handler that will be used in the API
export const handler = awsLambdaRequestHandler({
  router: appRouter,
});
