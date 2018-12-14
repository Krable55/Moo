import React from "react";
import Cow from "./Cow.js";

class Moo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  getInfo(){

  }
  render() {
    return (
      
      <div id="test"> 
      <Cow />
      </div>
    );
  }
};
export default Moo;