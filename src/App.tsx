import React, { useState } from 'react';
import './App.css';
import Topbar from './Component/Topbar';
import Cardcollection from './Component/Card/Cardcollection';
import Project from './Project';
import './Darktheme/Darktheme.css'
import styled from 'styled-components';



const StyledHome=styled.div`
background-color: #3171a9;
`



 function App() {
  

  const [state,SetState]=useState(false);
  const darkmode =()=>{
     SetState(!state)
  }
  return (

      <React.Fragment>
        <StyledHome>
        {/* <span className={'light ' +(state ? 'dark ':'')}> */}
       <Topbar/>
       <Project/>
      <Cardcollection/>
      {/* <button onClick={darkmode}>ddddddd</button> */}
      {/* </span> */}
    </StyledHome>
   </React.Fragment>
  );
}

export default App;
