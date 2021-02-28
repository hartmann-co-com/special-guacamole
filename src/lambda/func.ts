import {Handler, Context, Callback, APIGatewayEvent} from "aws-lambda";

const handler: Handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    const params = event.queryStringParameters;
    const response = {
        statusCode: 200,
        body: JSON.stringify({message: "Hello, World"})
    };

    callback(undefined, response);
};

export {handler};