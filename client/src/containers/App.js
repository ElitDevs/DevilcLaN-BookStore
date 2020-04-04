import React from "react";
import Register from "../components/register";
import SignIn from "../components/signin";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-6">
          <Register />
        </div>
        <div className="col-md-6">
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export default App;
