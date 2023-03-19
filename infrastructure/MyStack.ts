import { Api, StackContext, StaticSite, Table } from 'sst/constructs';

export function API({ stack }: StackContext) {
  // Create the table
  const table = new Table(stack, 'Counter', {
    fields: {
      counter: 'string',
    },
    primaryIndex: { partitionKey: 'counter' },
  });
  const api = new Api(stack, 'api', {
    defaults: {
      function: {
        bind: [table],
      },
    },
    routes: {
      'POST /': 'features/click/lambda.handler',
      'GET /trpc/{proxy+}': 'api/trpc/awsLambdaHandler.handler',
      'POST /trpc/{proxy+}': 'api/trpc/awsLambdaHandler.handler',
    },
  });

  // Deploy our React app
  const site = new StaticSite(stack, 'Site', {
    path: './web',
    buildCommand: 'pnpm build',
    buildOutput: 'dist',
    environment: {
      VITE_API_URL: api.url,
    },
  });
  stack.addOutputs({
    ...(site.url && { SiteUrl: site.url }),
    ApiEndpoint: api.url,
  });
}
