import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { ApiHandler } from 'sst/node/api';
import { Table } from 'sst/node/table';

const dynamoDb = new DynamoDB({});

export const handler = ApiHandler(async () => {
  const { Item } = await dynamoDb.getItem({
    TableName: Table.Counter.tableName,

    Key: marshall({
      counter: 'clicks',
    }),
  });
  const count = Item ? (unmarshall(Item).tally as number) : 0;
  await dynamoDb.updateItem({
    TableName: Table.Counter.tableName,
    Key: marshall({
      counter: 'clicks',
    }),
    UpdateExpression: 'SET tally = :count',
    ExpressionAttributeValues: marshall({ ':count': count + 1 }),
  });

  return {
    statusCode: 200,
    body: count.toString(),
  };
});
