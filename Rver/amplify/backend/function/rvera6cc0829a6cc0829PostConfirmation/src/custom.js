const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  if (!event.request.userAttributes.sub) {
    console.log('Error: No user was written to DynamoDB');
    context.done(null, event);
  }
  console.log(JSON.stringify(event, null, 2));
  // Save the user to DynamoDB
  const data = new Date();
  const params = {
    Item: {
      id: {
        S: event.request.userAttributes.sub
      },
      __typename: { S: 'User' },
      username: { S: event.userName },
      email: { S: event.request.userAttributes.email },
      firstName: { S: event.request.userAttributes.given_name },
      lastName: { S: event.request.userAttributes.family_name },
      telephone: { S: event.request.userAttributes.phone_number },
      createdAt: { S: data.toISOString() },
      updatedAt: { S: data.toISOString() }
    },
    TableName: process.env.USER_TABLE
  };

  try {
    await ddb.putItem(params).promise();
    console.log('Success');
  } catch (err) {
    console.log('Error', err);
  }

  context.done(null, event);
};
