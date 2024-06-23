import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>welcome react</h1>
        <h2>SIGN UP</h2>
    
       NAME:
        <input type="text" name="Name" id="Name"/><br/><br/>
        EMAILl:
        <input type="email" name="Email" id="mail"/><br/><br/>
        PHONE:
      <input type='number' name='phone' id='phone'/><br/><br/>
       
        DATE OF BIRTH:
        <input type='date' name='date' id='date'/><br/><br/>
      GENDER:
        <input type="radio" name="gender" id="gender" value="male"/>Male 
        <input type="radio" name="gender" id="gender" value="female"/>Female <br/><br/>
      <input type='submit' name='submit' id='submit' value='Submit'/><br/>
    
    
    
    
    
    
    </div>
  )
}

export default Signup