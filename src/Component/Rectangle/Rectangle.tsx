import React from 'react'
import styled from 'styled-components';



const Styledborder=styled.div`
 
position: absolute;
width: 1198px;
height: 403px;
left: 110px;
top: 134px;

/* Main Gradient */

background: linear-gradient(144.41deg, #818BE9 47.54%, #E47FDA 91.07%);
border-radius: 20px;

`

const Styledpharagraph=styled.div`
position: absolute;
height: 157px;
width: 520px;
left: 512px;
top: 40px;
border-radius: nullpx;


/* H1 Titles */

font-family: 'Circular Std';
font-style: normal;
font-weight: 900;
font-size: 48px;
line-height: 54px;
letter-spacing: -0.04em;

color: #FFFFFF;
`
const Styledpharagraph2=styled.div`
position: absolute;
height: 54px;
width: 400px;
top:170px;
left:512px;

border-radius: nullpx;


font-family: 'Circular Std';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
letter-spacing: -0.04em;

color: #FFFFFF;


`
const StyledFrame=styled.div`

display: flex;
flex-direction: row;
align-items:center;
gap: 10px;

position: absolute;
width: 211px;
height: 53px;
left: 512px;
top: 265px;

background: #FFFFFF;
box-shadow: 0px 19px 41px rgba(217, 217, 217, 0.5);
border-radius: 10px;

`
const StyledPharagroh3=styled.div`

position: absolute;
height: 23px;
width: 91px;
left: 60px;
top: 15px;
border-radius: nullpx;


font-family: 'Circular Std';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 23px;
/* identical to box height */

letter-spacing: -0.04em;

/* Main Black */

color: #212326;


/* Inside auto layout */


`
function Rectangle() {
  return (

    <React.Fragment>
        <Styledborder>
            <Styledpharagraph>We want give them a better tommorow!</Styledpharagraph>
            <Styledpharagraph2>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Styledpharagraph2>
            
               <StyledFrame>    <StyledPharagroh3> Get Started</StyledPharagroh3></StyledFrame>
           
           </Styledborder>
    </React.Fragment>
  )
}

export default Rectangle;