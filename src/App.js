import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Registration from './component/registration/registration';
import RegistrationSuccess from './component/registration/registration-success';
import Navbar from './component/nav/nav';
import Home from './component/home/home';
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
      newRegistration: this.newRegInit(),
      inputErrors: []
      
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
  

  handleUpdate =(newReg, errors) => {
   let newRegistration  = {...this.state.newRegistration};
   let inputErrors = [...this.state.inputErrors] 
   newRegistration = newReg
   this.setState({newRegistration, inputErrors})
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
        <Navbar />
        <Switch>
          <Route exact path='/' render = {()=>
            <Home />
          }>

          </Route>
          <Route exact path='/registration' render={({history})=>

            <Registration history={history} errors={this.state.inputErrors} newRegistration={this.state.newRegistration} handleUpdate={(reg)=>this.handleUpdate(reg)} handleSubmit={e=>{this.handleSubmit(e)}} newRegInit = { this.state.newRegInit}/>
          }>
          </Route>
          <Route exact path='/registration-success' render={({history})=>
          
            <RegistrationSuccess history={history} newReg={this.state.registrations[this.state.registrations.length-1]} />
          }>

          </Route>
        </Switch>
      </div>
    );
  }
  
}

export default App;

