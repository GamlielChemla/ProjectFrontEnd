import React, { Component } from 'react';
import './mySelect.css'



class MySelect extends Component{
    state={
        probability:"1",
        concequence:"2",
        mitigation:"fdafaf",
        reasons:"faffa"

    }


    render(){
      return(

        <form onSubmit= {this.props.addRiskToDataBase} >
   <div className="Risk"> {<h1 name ="riskName ">{this.props.riskName}</h1>}
          
   <br/>

          <select name = "probability" >
          
          <option value="" disabled selected>Select your probability</option>
            
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <select name = "concequence"  >
            <option value="" disabled selected>Select your concequence</option>
            
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>
        
        


          <textarea type="text" placeholder="enter risk mitigation" className="input" name = "mitigation" />
          <textarea type="text" placeholder="enter risk reasons" className="input"  name = "reasons" />
          
          <br/><br/><br/>
          </div>
         </form>
          )
       

    }
}




export default MySelect;