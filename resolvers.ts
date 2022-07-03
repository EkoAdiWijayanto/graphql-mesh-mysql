import { Resolvers } from './.mesh'

const resolvers: Resolvers = {
  users: {
    accounts: {
      selectionSet: /* GraphQL */ `
        {
          account_id
        }
      `,
      resolve: async (root, _args, context, info) => {
        const accounts = await context.MySM.Query.accounts({
          root,
          args: {
            id: root.account_id
          },
          context,
          info
        })
        return accounts[0]
      }
    }
  }
}


export default resolvers
