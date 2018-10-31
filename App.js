import React, { Component } from 'react';
import './App.css';
// import {button,Alert,Input,te}from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Connection from './myconect/Connection'
import axios from 'axios';
import { error } from 'util';
import Firstpage from './Firstpage/Firstpage'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ProbabilityTest: "",
      ConcequenceTest:"",
      MitigationTest:"",
      ReasonTest:"",
      ProbabilityBudget: "",
      ConcequenceBudget:"",
      MitigationBudget:"",
      ReasonBudget:"",
      ProbabilityDeliveryD: "",
      ConcequenceDeliveryD:"",
      MitigationDeliveryD:"",
      ReasonDeliveryD:"",
      ProbabilityCustomer: "",
      ConcequenceCustomer:"",
      MitigationCustomer:"",
      ReasonCustomer:"",
  obj:[]
    }
  }


  sendAll = (e) => {
    e.preventDefault();
    const myPost = { probability: e.target.elements.probability.value }
    let elem = e.target.elements.probability.value
    let elem1 = e.target.elements.concequence.value
    let elem2 = e.target.elements.mitigation.value
    let elem3 = e.target.elements.reason.value
    let all = elem + elem1 + elem2 + elem3
    // this.setState({
    //   obj: all
    // })
    console.log(all);

  }
// postHandle = ()=>{
//   const data ={

//     ProbabilityTest: this.state.ProbabilityTest,
//     ConcequenceTest:this.state.ConcequenceTest,
//     MitigationTest:this.state.MitigationTest,
//     ReasonTest:this.state.ReasonTest,
//     ProbabilityBudget: this.state.ProbabilityBudget,
//     ConcequenceBudget:this.state.ConcequenceBudget,
//     MitigationBudget:this.state.MitigationBudget,
//     ReasonBudget:this.state.ReasonBudget,
//     ProbabilityDeliveryD: this.state.ProbabilityDeliveryD,
//     ConcequenceDeliveryD:this.state.ConcequenceDeliveryD,
//     MitigationDeliveryD:this.state.MitigationDeliveryD,
//     ReasonDeliveryD:this.state.ReasonDeliveryD,
//     ProbabilityCustomer: this.state.ProbabilityCustomer,
//     ConcequenceCustomer:this.state.ConcequenceCustomer,
//     MitigationCustomer:this.state.MitigationBudget,
//     ReasonCustomer:this.state.ReasonCustomer,

//     }

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
        <br />

        
          <div className="test">test:
                  <br />

            <select name="probability" id="testlike" value ={this.state.ProbabilityTest} onChange = {(event) => this.setState({ProbabilityTest:event.target.value})}>

              <option value="" >probability</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>


            <select name="concequence" id="testcons" value={this.state.ConcequenceTest} onChange = {(event) => this.setState({ConcequenceTest:event.target.value})}>
              <option value="0" >concequence</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>

            </select>
          </div>

          <textarea type="text" dirName="data" placeholder="enter your mitigation" className="input" name="mitigation" value={this.state.MitigationTest} onChange = {(event) => this.setState({MitigationTest:event.target.value})}/>

          <textarea type="text" placeholder="enter your reason" className="input" name="reason" value={this.state.ReasonTest}  onChange = {(event) => this.setState({ReasonTest:event.target.value})}/>
          {/* <button className="save" type="submit" onClick={this.postHandle}>save</button> */}

      
      
        <br /><br /><br /><br /><br /><br />

        <div className="test">Budget :
          <br />

          <select name="probability" id="budglike" value ={this.state.ProbabilityBudget} onChange = {(event) => this.setState({ProbabilityBudget:event.target.value})}>
            <option value="0">probability</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>

          <select name="concequence" id="budglike"  value={this.state.ConcequenceBudget} onChange = {(event) => this.setState({ConcequenceBudget:event.target.value})}>
            <option value="0" >concequence</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>
        </div>
        

          <textarea type="text" placeholder="enter your mitigation" className="input" name="mitigation" value={this.state.MitigationBudget} onChange = {(event) => this.setState({MitigationBudget:event.target.value})}/>
          <textarea type="text" placeholder="enter your mitigation" className="input"  value={this.state.ReasonBudget}  onChange = {(event) => this.setState({ReasonBudget:event.target.value})}/>
          {/* <button className="save">save</button> */}
          {/* <button className="save" type="submit" onClick={this.postHandle}>save</button> */}

        

        <br />
        <br /><br /><br /><br /><br /><br />

        <div className="test">delivery delayed<br />


          <select name="likelihood" id="testlike" value ={this.state.ProbabilityDeliveryD} onChange = {(event) => this.setState({ProbabilityDeliveryD:event.target.value})}>
            <option value="0">probability</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>

          <select name="concequence" id="testcons" value={this.state.ConcequenceDeliveryD} onChange = {(event) => this.setState({ConcequenceDeliveryD:event.target.value})}>
            <option value="0" >concequence</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>
        </div>
        

          <textarea type="text" placeholder="enter your mitigation" className="input" name="mitigation" value={this.state.MitigationDeliveryD} onChange = {(event) => this.setState({MitigationDeliveryD:event.target.value})}/>
          <textarea type="text" placeholder="enter your mitigation" className="input"value={this.state.ReasonDeliveryD}  onChange = {(event) => this.setState({ReasonDeliveryD:event.target.value})}/>
      
          {/* <button className="save"  type="submit" onClick={this.postHandle}>save</button> */}
        


        <br />
        <br />
        <br /><br /><br /><br /><br />
        <div className="test">customer<br />


          <select name="likelihood" id="testlike"  contentEditable="true" value ={this.state.ProbabilityCustomer} onChange = {(event) => this.setState({ProbabilityCustomer:event.target.value})}>
            <option value="0">probability</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>

          <select name="concequence" id="testcons"  contentEditable="true" value ={this.state.ConcequenceCustomer} onChange = {(event) => this.setState({ConcequenceCustomer:event.target.value})}>
            <option value="0" >concequence</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>
        </div>
        


          <textarea type="text" placeholder="enter your mitigation" className="input" value={this.state.MitigationCustomer} onChange = {(event) => this.setState({MitigationCustomer:event.target.value})}/>
          <textarea type="text" placeholder="enter your mitigation" className="input" value={this.state.ReasonCustomer}  onChange = {(event) => this.setState({ReasonCustomer:event.target.value})} />
          
          <button className="save"  type="submit" onClick={this.postHandle}>save</button>

       


{/* <Firstpage/> */}
        {/* <Connection /> */}
      </div>
    );
  }
}

export default App;
