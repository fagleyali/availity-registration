import React from 'react'

const RegistrationSuccess = (props) =>{

    
    
    let newReg = props.newReg
    console.log(Object.keys(newReg).length)

    

    const handleClick=()=>{
        props.history.push('/');
    }
    return (
       
        <div >
             { newReg['firstName']!=='' ? 
             <div className='level-container'>
               
             
                 
                    <article key={1}>
                            <p className='success-message1'>Thanks {newReg['firstName'] }  {newReg['lastName']} for registration. </p> 
                            <p className='success-message2'>Welcome to <span className='logo'>Availity</span></p>
                            <button type='button' onClick={handleClick}>Home</button>
                    </article>
                
            </div>
             :
             props.history.push('/registration')
         } 
        </div>
       
    )
}

export default RegistrationSuccess;