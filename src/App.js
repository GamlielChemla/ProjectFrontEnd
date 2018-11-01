import React, { Component } from "react";
import "./App.css";
// import {button,Alert,Input,te}from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Connection from './myconect/Connection'
import axios from "axios";

import MySelect from "./components/mySelect";

class App extends Component {
  state = { risks:[{riskName:"delay"},{riskName:"test"},{riskName:"budget"},{riskName:"customer"}]  };

  addRiskToDataBase = e => {
    let name = e.target.elements.riskName.value;
    console.log(name);
  };

  componentDidMount() {
    axios.get("/EndPage").then(response => {
      this.setState({
        obj: response.data.arrayResult
      });
      console.log(this.state.obj);

      // console.log((response.data));
    });
  }

  render() {

    const mySelectsList = this.state.risks.map((item, index) =>
      <MySelect riskName={item.riskName} myMethod ={this.addRiskToDataBase}   />
    )
    return (
      <div className="App">
        
        {mySelectsList}


        <button className="save" type="submit" onClick={this.postHandle}>
          save
        </button>
      </div>
    );
  }
}

export default App;
