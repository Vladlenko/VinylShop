import React from 'react';
import './Footer.css'
import {ReactComponent as Instagram} from './footerSvg/Instagram.svg'
import {ReactComponent as Facebook} from './footerSvg/facebook.svg'
import {ReactComponent as Copyright} from './footerSvg/Copyright.svg'
import {ReactComponent as Logo} from './footerSvg/footerLogo.svg'

export default function Footer() {

  const menuList = ['Our Vinyl', 'Accessories', 'Gift Cards', 'About us', 'Info', 'Contacts']
  const menuLi = menuList.map(li => <li className='footerLi'><a>{li}</a></li>)

  const infoList = ['FAQ', 'Delivery & Payment', 'Exchange and return', 'Privacy policy', 'Public offer agreement', 'Reviews']
  const infoLi = infoList.map(li => <li className='footerLi'><a>{li}</a></li>)

  return (
    <div className="footerContainer">
        <div className='leftFooter'>
          <ul className='Menu'>
            <h2>Menu</h2>
            {menuLi}
            <Copyright></Copyright>
          </ul>
          <ul className='Info'>
            <h2>Info</h2>
            {infoLi}
          </ul>
          <ul className='Contacts'>
            <h2>Сontacts</h2>
            <li className='footerLi'>+38-050-00-00-000</li>
            <li className='footerLi'>Kiev, Peremogu Av., 21</li>
            <li className='footerLi'><a>longplay@gmail.com</a></li>
            <li className='footerLi'><a><Facebook></Facebook></a><a><Instagram></Instagram></a></li>
            <Logo></Logo>
          </ul>
        </div>
        <div className='rightFooter'>
          <div className='textRightFooter'>
          <h2>GET 15% OFF YOUR FIRST ORDER</h2>
          <p>by signing up to hear about limited editions, collectors editions and recommended releases!</p>
          </div>
          <div className='join'>
            <input type='email' className='email' placeholder='Enter your email' ></input>
            <button className='joinButton'>Join</button>
          </div>
        </div>
    </div>
  );
}