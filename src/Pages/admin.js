import React, {useState} from 'react';
import Header from '../Components/Elements/Header/Header'
import Footer from '../Components/Elements/Footer/Footer'
import './stylePages/admin.css'

export default function AboutUs () {

  const [category, setCategory] = useState

  const mutation = `mutation createVinyl{
    CategoryUpsert(category:{
      name:"Vinyl",
      
    }) {
      _id
      createdAt
      name
    }
  }`

  const makeRequest = mutation => {
    return fetch('http://shop-roles.node.ed.asmer.org.ua/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query})  
        }).then(res => res.json()
        .then(result => {
            const data = decode(result.data.login)
            console.log(data)
            return data
        })
        )
}
  
  return (

    <div className='mainContainer'>
      <div className='adminContainer'>
        <span>Добавить категорию</span>
        <input></input>
      </div>
    </div>
  );
}