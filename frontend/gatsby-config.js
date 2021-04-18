// /**
//  * Configure your Gatsby site with this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/gatsby-config/
//  */


module.exports = {
  /* Your site config here */
plugins: [
    {
    resolve: "gatsby-source-graphql",
    options: {
        // This type will contain remote schema Query type
        typeName: "Lollies",
        // This is field under which it's accessible
        fieldName: "get_lollies",
        // Url to query from
        url: "https://qmjq4bv7xjgt3igegpzptdytxi.appsync-api.us-east-1.amazonaws.com/graphql",
        headers: {
          "x-api-key": "da2-4rbghe47wbbcnfczqvvm5tpbc4",
        },
    },
    },
],
}
// LOLLIES


// BackendStack.GraphQLAPIKey = da2-4rbghe47wbbcnfczqvvm5tpbc4
// BackendStack.GraphQLAPIURL = https://qmjq4bv7xjgt3igegpzptdytxi.appsync-api.us-east-1.amazonaws.com/graphql
// BackendStack.StackRegion = us-east-1

