import React from 'react'

const RegistrationSuccess = (props) =>{

    let newReg = props.newReg
    console.log(newReg)
    return (
        <div>
             <div className='level-container'>
              { Object.keys(newReg).map((p,v)=>{
                   return ( <article key={v}>
                    <div>{p}</div> ':' <div>{newReg[p]}</div>
                 </article>)
                   
              })
            }     
              
                   
            
              
                
            
            </div>
        </div>
    )
}

export default RegistrationSuccess;