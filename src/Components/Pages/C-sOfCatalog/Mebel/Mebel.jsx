import './Mebel.css'
import { arr } from '../Spisok'
import Otziv from '../Otziv/Otziv.jsx'
import React, { useState } from 'react'
import { MyContext } from '../../../Catalog/Catalog.jsx'
import Button from '@mui/material/Button';


export default function Mebel(){
let {kor,izb}=React.useContext(MyContext)
let[korz,setKorz]=useState(JSON.parse(localStorage.getItem('korzina')))
let[izbr,setIzbr]=useState(JSON.parse(localStorage.getItem('izbran')))

   let res=arr.map(elem=>{
    return <div key={elem.id} id='kartochki'>
                 <img id='kartImg' src={elem.src}></img>
              <div id='opisanie'> 
                 <h2>{elem.name}</h2>
                 <h2>{elem.price}</h2>
                 <h3>Описание</h3>
                 <p>Характеристики:</p>
                 <p>{elem.opis}</p>
                 <p>Доставка: бесплатно</p>
                 <h3>Отзывы</h3>
                    <Otziv/>
                    <Button variant="outlined" id='dobav' 
                        onClick={()=>{
                           if(korz===null){
                               localStorage.setItem('korzina', JSON.stringify([]))
                               elem.checked=true
                               kor.push(elem)
                               localStorage.setItem('korzina', JSON.stringify(kor))
                                     }
                           else if(localStorage.getItem('korzina')!==null && korz.includes(elem)===false){
                                    elem.checked=true
                                    kor.push(elem)
                                    localStorage.setItem('korzina', JSON.stringify(kor))
                    }}}>Добавить в корзину</Button>

                    <Button variant="outlined" id='dobavIzb'
                        onClick={()=>{
                           if(izbr===null || localStorage.getItem('korzina')===null){
                               localStorage.setItem('izbran', JSON.stringify([]))
                               izb.push(elem)
                               localStorage.setItem('izbran', JSON.stringify(izb))
                                    }
                           else if(izbr!==null && izb.includes(elem)===false){
                                    izb.push(elem)
                                     localStorage.setItem('izbran', JSON.stringify(izb))
                    }}}> ☆ </Button>
              </div>
            </div>
   })

 
 

    return (<div id='screen'>
                {res}
            </div>);
}