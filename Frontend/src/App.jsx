import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from "./Pages/Account";
import Home from "./Pages/Home";

const App = () => {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </>;
};

export default App;
