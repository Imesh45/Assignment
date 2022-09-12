import React, { useState } from 'react'
import styled from 'styled-components';
import '../Button/button.css'


// const Button = styled.button`

// font-family: Circular Std;
//  background: #bab32f;
//  border-radius: 10px;
//  width: max-content;
//   font-size: 13px;
//   padding: 4px 80px;
//   border-color: #818BE9;
  
// `;
// const Button1 = styled.button`

// font-family: Circular Std;
//  background: #818BE9;
//  border-radius: 10px;
//  width: max-content;
//   font-size: 13px;
//   padding: 4px 80px;
//   border-color: #818BE9;
  
// `;


export default function ApplicactionWrapper() {

  const [state,SetState]=useState(false);
  const toggle =()=>{
     SetState(!state)


  }
  return (
    <React.Fragment>
       <button onClick={toggle} className={'Button ' +(state ? 'Button1 ':'')}>
      {state?'Pay Now':'Donate Now'}</button>
      
    </React.Fragment>
  )
}
