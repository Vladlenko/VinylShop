import React from 'react';
import {ReactComponent as Bag} from '../Elements/Header/headerSVG/bag.svg'
import {ReactComponent as Like} from '../Elements/Header/headerSVG/like.svg'
import pumas from './black-pumas.png'
import './ProductCard.css'

export default function ProductCard () {
    return (
        <div className='productCard'>
            <div className='productImage'>
                <img src={pumas}></img>
            </div>
            <div className='productText'>
                <div className='text'>
                <h2>Black Pumas</h2>
                <p>After Hours</p>
                <span>In Stock</span>
                </div>

                <div className='price'>
                    <span>43$</span>
                    <Bag className='cardIcons'></Bag>
                    <Like className='cardIcons'></Like>
                </div>
            </div>
        </div>
    )
} 