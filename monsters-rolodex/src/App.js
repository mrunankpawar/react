import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Mrunank", lastName: "Pawar" },
      company: "TechBrewers",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey {this.state.name.firstName} {this.state.name.lastName}, I work
            at {this.state.company}!
          </p>
          <button
            onClick={() => {
              // this.setState({name: { firstName: 'Pawar', lastName: 'Mrunank' }})
              this.setState(
                (state, props) => {
                  return {
                    name: { firstName: "Pawar", lastName: "Mrunank" },
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
