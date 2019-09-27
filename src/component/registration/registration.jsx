import React from 'react';

const registration1 = {}  

const Registration = (props) =>{
    
    
    function formSubmit(e){
        e.preventDefault()
        props.handleSubmit(e)

       
        
    }

    function handleChange (e){
      
      registration1[e.target.name]= e.target.value;
      console.log(registration1)
      props.handleUpdate(registration1)
        
    }
    return (
        <div>
           <h1>Insurance Provider Registration</h1>
            <form onSubmit={formSubmit}>
                <div className='registration-container'>
                
                    <div className='label-container'>
                        <label htmlFor='firstName'>First Name</label>
                        <label htmlFor='lastName'>Last Name</label>
                        <label htmlFor='NPINumber'>NPI Number</label>
                        <label htmlFor='businessAddress'>Business Address</label>
                        <label htmlFor='telephone'>Telephone</label>
                        <label htmlFor='email'>Email</label>
                    </div>

                    <div className='text-container'>
                    <input type='text' name='firstName' value={props.newRegistration.firstName} onChange={handleChange}  />
                    
                    <input type='text' name='lastName' value={props.newRegistration.lastName}  onChange={handleChange} />
                    
                    <input type='text' name='NPINumber' value={props.newRegistration.NPINumber}  onChange={handleChange} />
                    
                    <input type='text' name='businessAddress' value={props.newRegistration.businessAddress} onChange={handleChange} />
                    
                    <input type='text' name='telephone' value={props.newRegistration.telephone}onChange={handleChange}  />
                    
                    <input type='text' name='email' value={props.newRegistration.email}onChange={handleChange}  />
                    </div>
                    
                
                </div>

                <div className='reg-btn'>
                    <button type='submit'>Submit</button>
                    <button type='button' onClick={props.newRegInit}>Cancel</button>
                </div>
                
            </form>
        </div>
    )
}

export default Registration;