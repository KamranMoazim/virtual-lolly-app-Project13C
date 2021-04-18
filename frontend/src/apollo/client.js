import fetch from "cross-fetch"
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

export const client = new ApolloClient({
  link: new HttpLink({
    uri:
      "https://qmjq4bv7xjgt3igegpzptdytxi.appsync-api.us-east-1.amazonaws.com/graphql", // ENTER YOUR GRAPHQL ENDPOINT HERE
    fetch,
    headers: {
      "x-api-key": "da2-4rbghe47wbbcnfczqvvm5tpbc4" , // ENTER YOUR API KEY HERE
    },
  }),
  cache: new InMemoryCache(),
})



// BackendStack.GraphQLAPIKey = da2-4rbghe47wbbcnfczqvvm5tpbc4
// BackendStack.GraphQLAPIURL = https://qmjq4bv7xjgt3igegpzptdytxi.appsync-api.us-east-1.amazonaws.com/graphql
// BackendStack.StackRegion = us-east-1