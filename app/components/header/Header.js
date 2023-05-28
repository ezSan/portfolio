
import React, { useState } from "react";
import Logo from "./logo/Logo";
import NavBar from "./navBar/NavBar";
import styles from "../../scss/globals.module.scss";
import { Menu, Cancel } from "iconoir-react";

const { styledHeader, menuIcon, cancelIcon, menuIconHidden,styledNavBar, cancelIconVisible } = styles;

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const openMenu =()=>{
    
    setIsOpen(true)
  }
  const closeMenu =()=>{
    setIsOpen(false)
  }

  return (
    <div className={styledHeader}>
      <Logo className="logo" />

      {
        isOpen ? <Menu className={menuIconHidden}/> : <Menu className={menuIcon} onClick={openMenu}/>
      }

      {
        isOpen ? <Cancel className={cancelIconVisible} onClick={closeMenu}/> : <Cancel className={cancelIcon} />
      }

     
      <NavBar isOpen={isOpen}/>
    </div>
  );
}
