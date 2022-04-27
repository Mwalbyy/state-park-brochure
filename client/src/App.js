import "./App.sass";
import Home from "./components/pages/home/Home";
import Profile from "./components/pages/Profile";
import Posts from "./components/pages/posts/Posts";
import Weather from "./components/pages/Weather";
import SinglePost from "./components/pages/SinglePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

  const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/posts" element={<Posts />} />

            <Route path="/weather" element={<Weather />} />

            <Route path="/posts/:id" element={<SinglePost />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
};

export default App;
