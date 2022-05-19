import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client/core"
// import { onError } from "@apollo/client/link/error"
import { setContext } from '@apollo/client/link/context';
import { useCookies } from '@vueuse/integrations/useCookies'

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//       ),
//     )

//   if (networkError) console.log(`[Network error]: ${networkError}`)
// });
const cookies = useCookies(['locale'])

const authLink = setContext(async (_, { headers }) => {
  // const tokenExist = document.cookie.split('; ').find(row => row.startsWith('token='))

  let token = cookies.get('token')
  if (!token) {
    // if (tokenExist)
    // token = tokenExist.split('=')[1];

    const params = {
        'client-id': import.meta.env.VITE_WEB_CLIENT_ID,
        'client-secret': import.meta.env.VITE_WEB_CLIENT_SECRET,
      }
    const query = (new URLSearchParams(params)).toString()

    const response = await fetch(`${import.meta.env.VITE_APIURL}/oauth/requestAccessToken?${query}`)

    const data = await response.json()

    token = `${data.token_type} ${data.access_token}`
    
    cookies.set('token', token, {path: '/', maxAge: data.expires_in - 86400})
    // document.cookie = `token=${data.token_type} ${data.access_token}`; "path='/'";`maxAge=${data.expires_in - 86400}`
  }

  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
});

const httpLink = new HttpLink({
    // uri: "https://graphqlzero.almansi.me/api",
    uri: import.meta.env.VITE_GQL_URL,
})

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
  // link: from([errorLink, authLink.concat(httpLink)]),
})