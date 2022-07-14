import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/Comment";
import faker from "@faker-js/faker";
import ApprovalCard from "./components/ApprovalCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this is the only time we do direct assignment to state
    this.state = {
      lat: null,
      errorMessage: ""
    };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude});
      },
      err => {
        this.setState({errorMessage: err.message});
      }
    );
  }

  render() {
    return (
      <div className="ui container comments">
        <br />
        <h1>Geolocation</h1>
        <p>Get users location via Geolocation API</p>
        <p>
          Knowledge Leveraged: Conditional State Based React Components |
          Conditional Rendering{" "}
        </p>
        <ApprovalCard>
          <div>
            <p>
              Confirming your browser can find your location, with your
              permission
            </p>
            {this.state.lat ? "Your current latitude is " + this.state.lat : ""}

            <br />
            {this.state.errorMessage ? "Error:" + this.state.errorMessage : ""}
          </div>
        </ApprovalCard>
        <br />
        <h1>Blog Comments</h1>
        <p>Generate mock blog post comments with a modern UI library</p>
        <p>
          Knowledge Leveraged: Props, Nested Components, External CSS libraries
        </p>
        <ApprovalCard>
          <Comment author="Sam" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <br />
        <ApprovalCard>
          <Comment author="Ted" avatar={faker.image.avatar()} />
        </ApprovalCard>{" "}
        <br />
        <ApprovalCard>
          <Comment author="Judy" avatar={faker.image.avatar()} />
        </ApprovalCard>{" "}
        <br />
        <ApprovalCard>
          <Comment author="Nargian" avatar={faker.image.avatar()} />
        </ApprovalCard>{" "}
        <br />
        <ApprovalCard>
          <Comment author="Wizzi" avatar={faker.image.avatar()} />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
