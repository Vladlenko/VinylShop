import React, {useState} from 'react';
import {ReactComponent as Arrow} from '../Elements/Header/headerSVG/arrow.svg'
import {Link} from "react-router-dom";

export default function Spoiler({text, open = false, children, link}) {
    const [show, setShow] = useState(open)
    return (
            <li>
            <Link to = {link} onMouseEnter = {()=> setShow(!show)}>
                {text}{children ? <Arrow style={{transform: show ? 'rotateX(-180deg)' : 'rotateX(0deg)', transition: '400ms', marginLeft: '5px', fill: show ? '#1F1F1F' : '#F4F7F5'}}></Arrow> : '' }
            </Link>
            <ul className= 'popUp' style = {{display: show && children ? 'flex' : 'none'}} onMouseLeave = {() => setShow(!show)}>
                {show ? children : !children}
            </ul>
            </li>
    )
}
