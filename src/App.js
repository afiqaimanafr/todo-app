import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import Counter from "./components/counter/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Counter by={5} />
        <Counter by={10} />
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         Todo App!
//         <FirstComponent />
//         <SecondComponent />
//       </div>
//     );
//   }
// }

export default App;
