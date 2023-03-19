import { RemovalPolicy } from 'aws-cdk-lib';
import { SSTConfig } from 'sst';
import { API } from './infrastructure/MyStack';

export default {
  config() {
    return {
      name: 'vertical-trpc-monorepo-sst',
      region: 'eu-central-1',
    };
  },
  stacks(app) {
    if (app.stage !== 'prod') {
      // Remove all resources when non-prod stages are removed
      app.setDefaultRemovalPolicy(RemovalPolicy.DESTROY);
    }
    app.stack(API);
  },
} satisfies SSTConfig;
