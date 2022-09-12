import React from 'react'
import styled from 'styled-components';

const StyledParagraph =styled.div`
position: absolute;
width: 206px;
height: 48px;
left: 156px;
top: 52px;

font-family: 'Circular Std';
font-style: normal;
font-weight: 900;
font-size: 38px;
line-height: 48px;
/* identical to box height */

letter-spacing: -0.06em;

background: linear-gradient(177.68deg, #818BE9 1.95%, #AF93FF 98.06%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;

`;


function Togetherwe() {
  return (
    <React.Fragment>
      <StyledParagraph>Together We</StyledParagraph>
    </React.Fragment>
  );
}
export default Togetherwe;