import React from 'react';
import Logo from './logo/Logo';
import NavBar from './navBar/NavBar';
import styles from '../../scss/globals.module.scss';


const {styledHeader} = styles;0

export default function Header() {
  return (
    <div className={styledHeader}>
        <Logo/>
        <NavBar/>
    </div>
  )
}
