import "./styles.css";
import React from "react";
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

class app extends React.Component {
  constructor() {
    super();
    this.state = {
      isloggedin: true
    };
  }
  render() {
    let word;
    if (this.state.isloggedin === true) {
      word = "Logged in";
    } else {
      word = "logged out";
    }
    return <p>{word}</p>;
  }
}

export default app;
