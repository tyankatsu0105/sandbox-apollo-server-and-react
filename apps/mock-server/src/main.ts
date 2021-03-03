import * as express from 'express';
import * as ApolloServerExpress from 'apollo-server-express';
import * as VoyagerMiddleware from 'graphql-voyager/middleware';
import * as Fs from 'fs';
import * as Path from 'path';
import * as boxen from 'boxen';
import * as Resolvers from './app/resolvers';

const ENDPOINT_VOYAGER = '/voyager' as const;

const typeDefs = ApolloServerExpress.gql(
  Fs.readFileSync(Path.resolve('apps/graphql/schema.graphql'), 'utf8')
);

const server = new ApolloServerExpress.ApolloServer({
  typeDefs,
  resolvers: Resolvers.resolvers,
});
const ENDPOINT_GRAPHQL = server.graphqlPath;

const app = express();
app.use(
  ENDPOINT_VOYAGER,
  VoyagerMiddleware.express({ endpointUrl: ENDPOINT_GRAPHQL })
);

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(
    boxen(
      `
🚀 Server ready at http://localhost:4000${server.graphqlPath}

🚀 Voyager ready at http://localhost:4000${ENDPOINT_VOYAGER}
    `,
      {
        padding: 1,
        borderStyle: 'round',
        borderColor: 'greenBright',
      }
    )
  );
});
