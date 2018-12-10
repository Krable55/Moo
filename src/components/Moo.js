import React from "react";
import Cow from "./Cow.js";

class Moo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      
      <div id="test"> RENDERED
      <Cow />
      </div>
    );
  }
};
export default Moo;