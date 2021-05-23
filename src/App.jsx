import React from "react";
import NavMemu from "./components/NavMenu";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavMemu />
        </Router>
      </>
    );
  }
}

export default App;
