import React from 'react';
import './App.css';
import logo from './logo.svg';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
      <Authenticator>
        {({ signOut, user }) => (
            <div className="App">
              <p>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>We now have Auth!</h1>
                Hey {user.username}, welcome to my channel, with auth!
              </p>
              <button onClick={signOut}>Sign out</button>
            </div>
        )}
      </Authenticator>
  );
}

export default App;
