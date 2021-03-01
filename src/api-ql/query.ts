import {gql} from "apollo-server-lambda";

const typeDefs = gql(`
    type Query {
        hello: String
    }
`);

export {typeDefs};

// noinspection JSUnusedLocalSymbols
const resolvers = {
    Query: {
        hello: (root: any, args: any, context: any) => {
            return "Hello, world!";
        }

    }
};

export {resolvers};