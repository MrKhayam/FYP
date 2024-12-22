import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return <>
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </>;
};

export default App;
