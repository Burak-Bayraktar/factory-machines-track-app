const { ApolloClient, InMemoryCache, HttpLink } = require("@apollo/client/core");
const fetch = require("cross-fetch");

const client = (req) => {
    return new ApolloClient({
        uri: process.env.GRAPHQL_API_URL,
        cache: new InMemoryCache(),
        credentials: "include",
        link: new HttpLink({
            uri: process.env.GRAPHQL_API_URL,
            fetch,
            headers: {Cookie: req.headers.authorization},
        })
    })
}

module.exports.client = client