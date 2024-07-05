import './style.css'
import { arr } from './Spisok'
import Otziv from './Otziv'
import React, { useState } from 'react'
import { MyContext } from '../../Catalog'







export default function Mebel(){
let {kor,izb}=React.useContext(MyContext)
let[korz,setKorz]=useState(JSON.parse(localStorage.getItem('korzina')))
let[izbr,setIzbr]=useState(JSON.parse(localStorage.getItem('izbran')))

   let res=arr.map((elem,index)=>{
    return <div key={index} id='kartochki'>
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
                    <button id='dobav' 
                        onClick={()=>{
                           if(korz===null && localStorage.getItem('korzina')===null){
                               localStorage.setItem('korzina', JSON.stringify([]))
                               elem.checked=true
                               kor.push(elem)
                               localStorage.setItem('korzina', JSON.stringify(kor))
                                     }
                           else if(localStorage.getItem('korzina')!==null && elem.checked===false){
                                    elem.checked=true
                                    kor.push(elem)
                                    localStorage.setItem('korzina', JSON.stringify(kor))
                    }}}>Добавить в корзину</button>

                    <button id='dobavIzb'
                        onClick={()=>{
                           if(izbr===null || localStorage.getItem('korzina')===null){
                               localStorage.setItem('izbran', JSON.stringify([]))
                               izb.push(elem)
                               localStorage.setItem('izbran', JSON.stringify(izb))
                                    }
                           else if(izbr!==null && izb.includes(elem)===false){
                                    izb.push(elem)
                                     localStorage.setItem('izbran', JSON.stringify(izb))
                    }}}> ☆ </button>
              </div>
            </div>
   })

 
 

    return (<div id='screen'>
                {res}
            </div>);
}