import React from 'react';
import styles from '../../scss/globals.module.scss';

const {footerStyled} = styles;

const fecha = new Date();

const actualYear = fecha.getFullYear();



export default function Footer() {
  return (
    <div className={footerStyled}>
        <p>
            By ezSan© {actualYear}
        </p>
    </div>
  )
}
