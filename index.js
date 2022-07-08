const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { categories, products } = require("./db");



const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product
  },
  context: {
    categories,
    products
  }
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
