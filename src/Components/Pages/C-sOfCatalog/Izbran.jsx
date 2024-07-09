import '../../App.css'
import HeadCat from './HeadCat'
import FootCat from './FootCat'
import { useState } from 'react'
import Heart from '../../images/heart_icon_173090.png'
import { memo } from 'react';




export default memo(function Izbran(){
  let[izbr,setIzbr]=useState(JSON.parse(localStorage.getItem('izbran')))
  let[korz,setKorz]=useState(JSON.parse(localStorage.getItem('korzina')))
  let res;

  if(izbr===null){
    localStorage.setItem('izbran', JSON.stringify([]))
   } 
   else if(izbr!==null && korz===null){
    localStorage.setItem('korzina', JSON.stringify([])) 
   }



  if(!izbr.length){
    res=<img id='itogKorz' src={Heart}></img>
  }else {
    res=izbr.map(elem=>{
    return <><li key={elem.id} id='vkor'>
               <img id='vkorImg' src={elem.src}></img>
               <span id='name'>{elem.name}</span>
               <span id='price'>{elem.price}р</span>
               <button id='vkorDobav' onClick={()=>{setKorz([...korz,{...elem}])
                                                    setIzbr(izbr.filter(item=>item.id!==elem.id))
                                                  }}>🛒</button>
               <button id='vkorUdal' onClick={()=>setIzbr(izbr.filter(item=>item.id!==elem.id))}>
               <span id='udal'>Удалить</span></button>
              </li>
           </>})}

  localStorage.setItem('izbran', JSON.stringify(izbr));

if(korz!==null){
  localStorage.setItem('korzina', JSON.stringify(korz))
}
 

    return ( <div id='MainIzbran' >
                 <HeadCat/>
                 <div style={{
                      display:'flex'
                             }}>
                   <div id='mebel'>
                   <ul id='allKor'>{res}</ul>
                   </div> 
                 </div>
                 <FootCat/>
             </div>);
})
 
