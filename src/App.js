import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Body from 'components/Body';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <Body />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
