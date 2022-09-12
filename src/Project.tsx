import React from 'react'
import styled from 'styled-components'


const StyledCard1=styled.div`
position: absolute;
width: 130px;
height: 46px;
left: 600px;
top: 560px;

font-family: 'Circular Std';
font-style: normal;
font-weight: 900;
font-size: 36px;
line-height: 46px;
/* identical to box height */

text-align: center;
letter-spacing: -0.04em;

color: #C6C7CD;

`

export default function Project() {
  return (
    <React.Fragment>
        <StyledCard1> <h1>Projects</h1></StyledCard1>
     
    </React.Fragment>
  )
}
