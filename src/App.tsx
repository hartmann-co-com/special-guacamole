import logo from './logo.svg';
import './App.css';
import * as React from "react";
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Query, QueryResult} from 'react-apollo';

const client = new ApolloClient({
    uri: "/.netlify/functions/api-ql"
});

function App() {

    return (
        <ApolloProvider client={client}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                    <span style={{whiteSpace: 'nowrap'}}>Message-ql:
                        <Query query={gql`{ hello }`}>
                            {(result: QueryResult) => <span>{result?.data?.hello}</span>}
                        </Query>
                    </span>
                </header>
            </div>
        </ApolloProvider>
    );
}

export default App;
