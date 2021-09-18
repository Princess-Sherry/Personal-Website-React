import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Routes from "components/Routes";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__page">
        <Routes />
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
