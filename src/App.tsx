import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { Provider } from 'react-redux';
import client from './graphql/client';
import store from './store';
import logo from './logo.svg';
import './App.css';
import Books from './components/Books';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit&nbsp;
              <code>src/App.tsx</code>
              &nbsp;and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Books />
          </header>
        </div>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
