import React from 'react';
import Registration from './component/registration/registration';
import RegistrationSuccess from './component/registration/registration-success';
import './App.css';

class  App extends React.Component {
  constructor (){
    super()
    this.state={
      registrations:[{
      firstName:'',
      lastName:'',
      NPINumber: 0,
      businessAddress:'',
      telephone:'',
      email:''
      }],
      newRegistration: this.newRegInit()
      
    }
  }

  newRegInit = ()=>{
    
    return {
      firstName:'',
      lastName:'',
      NPINumber: 0,
      businessAddress:'',
      telephone:'',
      email:''
    }
      
    }
  

  handleUpdate =(newReg) => {
   let newRegistration  = {...this.state.newRegistration} 
   newRegistration = newReg
   this.setState({newRegistration})
   console.log(this.state.newRegistration)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(state=>({
      registrations:[...state.registrations,state.newRegistration],
      newRegistration: {
        firstName:'',
        lastName:'',
        NPINumber: 0,
        businessAddress:'',
        telephone:'',
        email:''
        }
    }))
  }
  render(){
    return (
      <div className="App">
        <Registration newRegistration={this.state.newRegistration} handleUpdate={(reg)=>this.handleUpdate(reg)} handleSubmit={e=>{this.handleSubmit(e)}} newRegInit = { this.state.newRegInit}/>
        <RegistrationSuccess newReg={this.state.registrations[this.state.registrations.length-1]} />
      </div>
    );
  }
  
}

export default App;

