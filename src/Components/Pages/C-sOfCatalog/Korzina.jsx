import '../../App.css'
import HeadCat from './HeadCat'
import FootCat from './FootCat'
import Korzina from '../../images/Это магазинный сайт.jpg'
import { useState } from 'react'


export default function Massiv(){
  let[izbr,setIzbr]=useState(JSON.parse(localStorage.getItem('izbran')))
  let[korz,setKorz]=useState(JSON.parse(localStorage.getItem('korzina')))
  let res;
  let sum=0;
 
 if(korz===null){
  localStorage.setItem('korzina', JSON.stringify([]))
 } else if(korz!==null && izbr===null){
  localStorage.setItem('izbran', JSON.stringify([]))
 }

  function Ubavit(id){
    setKorz(korz.map(item=>{
      if(item.id===id){
        return{
          ...item,
          position:item.position-1>1?--item.position:'1',
          totalPrice:item.price*item.position
        }
      }
      return item
    }))
  }

  function Pribavit(id){
    setKorz(korz.map(item=>{
      if(item.id===id){
        return{
          ...item,
          position:++item.position,
          totalPrice:item.price*item.position
        }
      }
      return item
    }))
  }





 if (!korz.length){
      res=<img id='itogKorz' src={Korzina}></img>
    }else {
      res=korz.map(elem=>{
        return <><li key={elem.id} id='vkor'>
                     <img src={elem.src}></img>
                     <span id='name'>{elem.name}</span>
                     <button id='Ubavit' onClick={()=>Ubavit(elem.id)}>-</button>
                     <span id='position'>{elem.position} <span> шт.</span></span>
                     <button id='Pribavit' onClick={()=>Pribavit(elem.id)}>+</button>
                     <span id='price'>{elem.totalPrice}р</span>
                     <button id='vkorDobav' onClick={()=>{setIzbr([...izbr,{...elem}])
                                                      setKorz(korz.filter(item=>item.id!==elem.id))
                                                    }}
                                                      >☆</button>
                     <button id='vkorUdal' onClick={()=>setKorz(korz.filter(item=>item.id!==elem.id))

                     }>
                     <span id='udal'>Удалить</span></button></li></> 
                                    })}
if(izbr!==null){
localStorage.setItem('korzina', JSON.stringify(korz))
    }
if(izbr!==null){
  localStorage.setItem('izbran', JSON.stringify(izbr))
              }
   
 
for(let elem of korz){
       sum+=Number(elem.totalPrice) 
                  }


return ( <div id='MainKorz'>
                <HeadCat/>
                <div style={{display:'flex'}}>
                    <div id='mebel'>
                    <ul id='allKor'>{res}</ul>
                    </div> 
                </div>
                <div id='itog'>
                  <p>Всего:<span>{sum} р</span></p>
                </div>
                <div id='itogDost'>
                <p>Доставка:<span>Бесплатно</span></p>
                </div>
                <button id='pokupka'>Купить</button><FootCat/>
          </div>);
}
 
