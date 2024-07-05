import './style.css'
import {useState} from 'react'

let arr=[{
    name:'Ivan Ivanov',
    otziv:'Очень понравился!!!',
    show:false
},{
    name:'Ivana Ivanova',
    otziv:'Классный!!!',
    show:false

},
{
    name:'Maria Ivanova',
    otziv:'Отличная доставка!',
    show:false

}]

export default function Button(){
    let [number,setNumber]=useState(0)
    let [all,setAll]=useState(arr[number])
    let button;
  
    
  
function Dalshe(){
    if(number<3){
    setNumber(number+1)
    setAll(arr[number])
}}
function Nazad(){
    if(number>0){
    setNumber(number-1)
    setAll(arr[number])
}}

if(number===0){
   button= <div id='allOtziv0'> <div id='otziv0'>
    <div id='name'><div id='photo'></div><p>{all.name}</p></div>
    <p>{all.otziv}</p> 
</div><button id='Vpered' onClick={Dalshe}>Далее</button></div>
}else if(number===1){
    button= <div id='allOtziv1'> <button id='Nazad' onClick={Nazad}>Назад</button><div id='otziv1'>
    <div id='name'><div id='photo'></div><p>{all.name}</p></div>
    <p>{all.otziv}</p> 
</div><button id='Vpered' onClick={Dalshe}>Далее</button></div>
}else if(number===2){
    button= <div id='allOtziv1'> <button id='Nazad' onClick={Nazad}>Назад</button><div id='otziv1'>
    <div id='name'><div id='photo'></div><p>{all.name}</p></div>
    <p>{all.otziv}</p> 
</div></div>
}
    return ( <div>{button}</div> );
}
 
