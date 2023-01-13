import React from "react";
import '../LongBanner/LongBanner.css'
import Button from '@mui/material/Button';
import firstImg from './BannerImg/first.png'
import secondImg from './BannerImg/two.png'
import thirdImg from './BannerImg/third.png'
import fourthImg from './BannerImg/four.png'
import fifthImg from './BannerImg/five.png'
import sixthImg from './BannerImg/six.png'
import seventhImg from './BannerImg/seven.png'
import eighthImg from './BannerImg/eight.png'
import ninthImg from './BannerImg/nine.png'
import Marquee from "react-fast-marquee";


export default function LongBanner () {

    const bannerImagesOne = [firstImg, secondImg, thirdImg]
    const bannerImagesTwo = [fourthImg, fifthImg, sixthImg]
    const bannerImagesThird = [seventhImg, eighthImg, ninthImg]

    const bannerImageOne = bannerImagesOne.map(image => {
        return <img className="imgBanner" src = {image}></img>
    })
    const bannerImageTwo = bannerImagesTwo.map(image => {
        return <img className="imgBanner" src = {image}></img>
    })
    const bannerImageThree = bannerImagesThird.map(image => {
        return <img className="imgBanner" src = {image}></img>
    })

    return (
        <div className="LongBannerContainer">
            <div className="BannerTittle">
                <h1>
                Open your own world of vinyl
                </h1>
                <Button className="bannerButton" variant="contained" style={{backgroundColor: '#F4F7F5', color: '#1F1F1F', fontSize: '24px', fontWeight: '600', fontFamily: 'Poppins, sans-serif'}}>Shop now</Button>
            </div>
            <div className="BannerImages" >
                <Marquee gradient={false}>
                {bannerImageOne}
                </Marquee>
                <Marquee speed={10} gradient={false}>
                {bannerImageTwo}
                </Marquee>
                <Marquee gradient={false}>
                {bannerImageThree}
                </Marquee>
                </div>
            </div>
    )
}