import "./App.sass";
import Home from "./components/pages/home/Home";
import Profile from "./components/pages/profile/Profile";
import Posts from "./components/pages/posts/Posts";
import Weather from "./components/pages/Weather";
import SinglePost from "./components/pages/SinglePost";
import Login from "./components/pages/profile/Login"
import Navigation from "./components/Navigation"
// import Auth from "./utils/auth"
import Signup from "./components/pages/profile/Register"
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from '@apollo/client';

  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />}/>

            <Route path="/me" element={<Profile />}/>

            <Route path="/profile" element={<Profile />} />

            <Route path="/signup" element={<Signup />}/>

            <Route path="/posts" element={<Posts />} />

            <Route path="/weather" element={<Weather />} />

            <Route path="/singlepost" element={<SinglePost />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
};

export default App;
