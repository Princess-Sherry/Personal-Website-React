import React from 'react';
import './App.css';
import Footer from '../Footer';
import Header from '../Header';
import Body from '../Body';

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
