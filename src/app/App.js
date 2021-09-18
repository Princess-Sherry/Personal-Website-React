import Footer from "components/Footer";
import Header from "components/Header";
import Routes from "components/Routes";
import { React } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <Router>
        <Header />
        <div className="layout__page">
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
