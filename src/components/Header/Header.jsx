import React from 'react'
import Logo from '../../Assets/pokemon-23.svg';

const Header = () => {
  return(
    <header>
      <img className = 'page-title' src = {Logo} alt = 'logo'/>
    </header>
  )
}

export default Header;
