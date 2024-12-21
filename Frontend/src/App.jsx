import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from "./Pages/Account";

const App = () => {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Account />} />
      </Routes>
    </Router>
  </>;
};

export default App;
