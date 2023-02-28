import { appRouter } from './internal/appRouter';
import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';

// This is the handler that will be used in the API
export const awsLambdaHandler = awsLambdaRequestHandler({
  router: appRouter,
});
