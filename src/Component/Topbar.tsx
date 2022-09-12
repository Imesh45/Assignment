import React from 'react'
import Sun from '../Component/Sun/Sun'
import Logo from './Logo/Logo';
import Rectangle from './Rectangle/Rectangle';


 function Topbar() {
  return (
    <React.Fragment>
      <Sun/>
      <Logo/>
      <Rectangle/>
  
    </React.Fragment>
  )
}

export default Topbar;