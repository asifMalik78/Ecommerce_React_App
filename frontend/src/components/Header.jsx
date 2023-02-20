import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar';

const MainHeader=styled.header`
    height:8rem;
    background-color: ${({theme})=> theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:relative;
    padding:0 2rem;
    .logo{
        height:4.8rem;
    }
`;
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src='http://localhost:5173/images/logo.png' alt='Logo Image' className='logo'/>
        </NavLink>

        <Navbar/>
    </MainHeader>
  )
}

export default Header;