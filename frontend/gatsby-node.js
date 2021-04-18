const path = require("path")


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { data } = await graphql(`
        query MyQuery {
            get_lollies {
                getLollies {
                    c1
                    c2
                    c3
                    id
                    sender
                    rec
                    msg
                }
            }
        }
    `)
    data.get_lollies.getLollies.forEach(node => {
        createPage({
            path: `showLolly/${node.id}`,
            component: path.resolve("./src/templates/sendingTemp.js"),
            context: {
                c1: node.c1,
                c2: node.c2,
                c3: node.c3,
                id: node.id,
                msg: node.msg,
                sender: node.sender,
                rec: node.rec,
            },
        })
    })
}
