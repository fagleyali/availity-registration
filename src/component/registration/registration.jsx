import React from 'react';

const registration1 = {}  
const firstNameRegex = "[A-Za-z]{3,}"
const lastNameRegex = "[A-Za-z]{3,}"
const emailRegex= "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
const phoneRegEx = "[1-9][0-9][0-9]+-[1-9][0-9][0-9]+-[1-9][0-9][0-9][0-9]"
const numberRegEx = "[0-9]{3,}";

const Registration = (props) =>{
    
    
    function formSubmit(e){
        e.preventDefault()
        
        props.handleSubmit(e)
        props.history.push('/registration-success')
       
        
    }
    

    function handleChange (e){
        
            
      registration1[e.target.name]= e.target.value;
      console.log(registration1)
      props.handleUpdate(registration1)
      
        
    }

    
    return (
        
        <div >
           <h1>Insurance Provider Registration</h1>
            
            <div >
                {props.errors?props.errors.map((er,id)=>(
                    
                    <li key={id}>{er}</li>
                
                )
                ):
                false

            }
    
                
                
                <form onSubmit={formSubmit} className='registration-container'>
                
                
                    <div className='label-container'>
                        <label htmlFor='firstName'>First Name</label>
                        <input required type='text' pattern={firstNameRegex} name='firstName' value={props.newRegistration.firstName} onChange={handleChange}  />
                        <label htmlFor='lastName'>Last Name</label>
                        <input required type='text' pattern={lastNameRegex} name='lastName' value={props.newRegistration.lastName}  onChange={handleChange} />
                        <label htmlFor='NPINumber'>NPI Number</label>
                        <input required type='text' pattern={numberRegEx} name='NPINumber' value={props.newRegistration.NPINumber}  onChange={handleChange} />
                        <label htmlFor='businessAddress'>Business Address</label>
                        <input required type='text' name='businessAddress' value={props.newRegistration.businessAddress} onChange={handleChange} />
                        <label htmlFor='telephone'>Telephone</label>
                        <input required type='text' pattern={phoneRegEx} name='telephone' value={props.newRegistration.telephone}onChange={handleChange}  />
                        <label htmlFor='email'>Email</label>
                        <input required type='text' name='email' pattern={emailRegex} value={props.newRegistration.email}onChange={handleChange}  />
                    </div>

                    
                    
                
               

                <div className='reg-btn'>
                    <button className='btn-reg' type='submit' >Register</button>
                    <button className='btn-reg' type='button' onClick={()=>props.history.push('/')}>Home</button>
                </div>
                
            </form>

            </div>
            <footer></footer>
        </div>
    )
}

export default Registration;