import React, { Component } from 'react';
import './App.css';
// import {button,Alert,Input,te}from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Connection from './myconect/Connection'
import axios from 'axios';

import MySelect from './components/mySelect';



class App extends Component {
state ={risk:{}}

addRiskToDataBase= (e) =>{
let name = e.target.elements.riskName.value;
console.log(name);


}

    componentDidMount() {

      axios.get("/EndPage")
        .then((response) => {
  
  
          this.setState({
            obj: response.data.arrayResult
          })
          console.log(this.state.obj)
            
          // console.log((response.data));
        })
    }
  
  render() {
    return (
      <div className="App">
       

     <MySelect riskName = "delay"  myMethod = {this.addRiskToDataBase}/>
     <MySelect riskName = "test" myMethod = {this.addRiskToDataBase}/>
     <MySelect riskName = "budget" myMethod = {this.addRiskToDataBase}/>
     <MySelect riskName = "customer"myMethod = {this.addRiskToDataBase} />
       


          <button className="save"  type="submit" onClick={this.postHandle}>save</button>

       



      </div>
    );
  }
}

export default App;
