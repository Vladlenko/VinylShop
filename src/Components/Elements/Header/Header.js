import React from "react";
import logo from './headerSVG/logo.svg'
import {ReactComponent as Like} from './headerSVG/like.svg'
import {ReactComponent as User} from './headerSVG/user.svg'
import {ReactComponent as Search} from './headerSVG/search.svg'
import {ReactComponent as Bag} from './headerSVG/bag.svg'
import './Header.css'
import Spoiler from '../../Supporting/Spoiler'
import OurVinyl from '../../../Pages/OurVinyl'
import Accessories from '../../../Pages/Accessories'
import GiftCards from '../../../Pages/GiftCards'
import AboutUs from '../../../Pages/AboutUs'
import Info from '../../../Pages/Info'
import Contacts from '../../../Pages/Contacts'

import {Link} from "react-router-dom";


export default function Header () {

    const vinylList = ['All vinyl', 'New releases', 'Limited edition', 'Sale', 'Best sellers', 'Box sets']
    const vinylPopUp = vinylList.map(vinylItem => <li key = {Math.random()}><a>{vinylItem}</a></li> )

    const infoList = ['Delivery & Payment', 'Guarantees & returns', 'FAQ']
    const infoPopUp = infoList.map(infoItem => <li key = {Math.random()}><a>{infoItem}</a></li>)


    const textList = ['Our Vinyl', 'Accessories', 'Gift Cards', 'About us', 'Info', 'Contacts']
    const textHeader = textList.map
    (text => {
        if (text.includes('Our Vinyl')) {
            return <Spoiler link = {text.split(' ').join('').toLowerCase()} text = {text} children = {vinylPopUp}></Spoiler>
        }
        if (text.includes('Info')) {
            return <Spoiler link = {text.split(' ').join('').toLowerCase()} text = {text} children = {infoPopUp}></Spoiler>
        }
        else {
            return <Spoiler link = {text.split(' ').join('').toLowerCase()} text = {text}></Spoiler>
        }
    })

    const headerLinks = [OurVinyl, Accessories, GiftCards, AboutUs, Info, Contacts]

    const routObj = Object.assign(textList.map((text,i) => ({path: text, element: headerLinks[i]})))

    const svgList = [Like, User, Search, Bag]
    const svgHeader = svgList.map(Icons => <li key = {Math.random()}><Link to = {Icons.render.name.substring(3).toLowerCase()}><Icons className="headerIcons"></Icons></Link></li>)

    return (
        <div className="headerContainer">

            <div className="logo" style={{width: 'auto'}}>
                <a href="main"><img width = '100px' height = '50px' src = {logo}></img></a>
            </div>

            <ul className="navBar">
                {textHeader}
            </ul>

            <ul className="userBar">
                {svgHeader}
                
            </ul>

        </div>
    )
}
