import React from 'react';

const registration1 = {}  

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
                
                
                <form onSubmit={formSubmit} className='registration-container'>
                
                
                    <div className='label-container'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' name='firstName' value={props.newRegistration.firstName} onChange={handleChange}  />
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' name='lastName' value={props.newRegistration.lastName}  onChange={handleChange} />
                        <label htmlFor='NPINumber'>NPI Number</label>
                        <input type='text' name='NPINumber' value={props.newRegistration.NPINumber}  onChange={handleChange} />
                        <label htmlFor='businessAddress'>Business Address</label>
                        <input type='text' name='businessAddress' value={props.newRegistration.businessAddress} onChange={handleChange} />
                        <label htmlFor='telephone'>Telephone</label>
                        <input type='text' name='telephone' value={props.newRegistration.telephone}onChange={handleChange}  />
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' value={props.newRegistration.email}onChange={handleChange}  />
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