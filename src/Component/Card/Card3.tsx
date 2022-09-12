import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import instance from '../../api/config';
import ApplicactionWrapper from '../Button/ApplicactionWrapper';


const StyledCard1=styled.div`
position: absolute;
top: 696px;
left:1000px;
padding-top: 50px;
padding-left:50px;
padding-right: 50px;
width: 205px;
height: 360px;
box-shadow: 0 4px 8px 0  #818BE9;;
`
const StyledCard2=styled.div`
position: absolute;
width: 150px;
height: 60px;


/* Card Title */

font-family: 'Circular Std';
font-style: normal;
font-weight: 700;
font-size: px;
line-height: 30px;
letter-spacing: -0.04em;

color: #212326;


/* Inside auto layout */


`
const StyledCard3=styled.div`



`
const Button = styled.button`
font-family: Circular Std;
 background: #818BE9;
 border-radius: 10px;
  font-size: 13px;
  padding: 4px 80px;
  border-color: #818BE9;
  

`;

const URL1="https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/fundraising";



 function Card3() {

  const [image,setImage] =useState();

  const [images, setImages] = useState([]);
  console.log(images)

  useEffect( () => {
      //  axios.get(URL1).then((response:any)=>{
      // //  setImage(response.config.url);
      //  console.log(response,"photo-->");
      //  })
      getData();
      },[]);

      const getData = async () => {
        const res = await instance.get("/fundraising",{ params: { pagination: "2", limit: "2" }});
        console.log(res);
        // setImage(res.data.data[0].urls["thumb"]);
        console.log(res.data.data)
         setImages(res.data.data); 
      }

  return (
    
    <React.Fragment>
          
      {images.map((img:any)=>{
         return (
          <StyledCard1 >
      
           <img src={img.urls["thumb"]}  />
         
          <StyledCard2>
           <p>Build school Wellawaya
Sri Lanka</p>
<StyledCard3><p>$ 6900 Raised</p></StyledCard3>
<ApplicactionWrapper/>



</StyledCard2>
        </StyledCard1>
        )
            })}
      

 
    </React.Fragment>
  )
}
export default Card3;