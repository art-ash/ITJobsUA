import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Offer from "./Offer";

function App() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/offer/:offerId" element={<Offer />} />
          </Routes>
        </div>
      </Router>
    );
}

export default App;
