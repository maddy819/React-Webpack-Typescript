import React from "react";
import FirstComponent from "./components/FirstComponent/FirstComponent";
import UserComponent from "./components/UserComponent/UserComponent";

const App = () => {
  return (
    <div>
      <h1>Hello, Welcome to React and TypeScript</h1>
      <FirstComponent />
      <UserComponent name="John Doe" age={26} address="" dob={new Date()} />
    </div>
  );
};

export default App;
