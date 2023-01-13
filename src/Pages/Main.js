import React from 'react';
import Header from '../Components/Elements/Header/Header';
import LongBanner from '../Components/Elements/LongBanner/LongBanner';
import ProductCard from '../Components/Supporting/ProductCard';




export default function Main() {
  // const textList = ['Our Vinyl', 'Accessories', 'Gift Cards', 'About us', 'Info', 'Contacts']
  // const headerLinks = [OurVinyl, Accessories, GiftCards, AboutUs, Info, Contacts]
  // const routObj = Object.assign(textList.map((text,i) => ({path: text, element: headerLinks[i]})))
  return (

    <div className="App">
      <LongBanner></LongBanner>
      <ProductCard></ProductCard>

    </div>
  );
}
