import React, { Component } from 'react';
import './MySelect.css'



class MySelect extends Component{
    state={
        probability:"",
        concequence:"",
        mitigation:"",
        reasons:""

    }


    render(){
      return(

        

   <div className="Risk"> {<h1 name ="riskName "> {this.props.riskName} </h1>}
          
   <br/>

          <select name = "probability"  onChange={this.props.addDataToState.bind(this,this.props.riskName)} >
          
          <option value="disabled selected" >Select your probability</option>
            
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>

          <select name = "concequence"  onChange ={this.props.addDataToState.bind(this,this.props.riskName)} >
            <option value="disabled selected"  >Select your concequence</option>
            
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>

          <textarea type="text" placeholder="enter risk mitigation" className="input" name = "mitigation" onChange= {this.props.addDataToState.bind(this,this.props.riskName)} />
          
          <textarea type="text" placeholder="enter risk reasons" className="input"  name = "reasons"  onChange = {this.props.addDataToState.bind(this,this.props.riskName)}/>

          <button onClick={this.props.removeRisk}> x </button>
          
          <br/><br/><br/>
          
          </div>


        
          )
       

    }
}




export default MySelect;