import {ApolloServer} from "apollo-server-lambda";
import {resolvers, typeDefs} from "../api-ql/query";

const server = new ApolloServer({
    typeDefs,
    resolvers,

    introspection: true,
    playground: true
});

const handler = server.createHandler();

export {handler};