 import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'

 /const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
   // <ApolloProvider client={client}>
    <div>
      <Signup />
      <Login />
      <Home />
    </div>
    //</ApolloProvider>
  )
}

export default App //

