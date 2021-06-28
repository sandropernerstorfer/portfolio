import React from 'react';
// Styling
import styled from 'styled-components';
// Logo
import logoImage from '../assets/AppLogo.png';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Components
import NavInline from './NavInline';
import NavSide from './NavSide';
// Router
import { Link } from 'react-router-dom';
// Redux
import { setNavOpen } from '../state/navbarState';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {

  const dispatch = useDispatch();
  const { menuOpen } = useSelector( state => state.navbar );

  // Functions
  const handleMenuOpen = () => {
    dispatch(setNavOpen());
  };

  return (
    <StyledNavbar>
      <Link to='/'>
        <Logo src={logoImage} menuOpen={menuOpen} alt="Page Logo" />
      </Link>
      <MenuIcon icon={faBars} onClick={ handleMenuOpen }/>
      <NavInline/>
      <NavSide/>
    </StyledNavbar>
  );
};

// Styled Components
const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0 1rem 2rem;

  @media (max-width: 570px){
    justify-content: space-between;
    padding-left: 2.3rem;
    padding-right: 3rem;
  }
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;

  &:hover{
    animation: zoomInOut .7s 1;
  }

  @keyframes zoomInOut{
    0%{transform: scale(1)}
    50%{transform: scale(1.1)}
    100%{transform: scale(1)}
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  @media (min-width: 571px){
    display: none;
  }
  color: #4D8DF7;
  font-size: 2rem;
  cursor: pointer;
`;

export default Navbar;