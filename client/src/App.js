import './App.sass';
import Page from './components/Page'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });
  
function App() {
    return (
      <ApolloProvider client={client}>
        <Page />
        </ApolloProvider>
    )
    }
export default App
