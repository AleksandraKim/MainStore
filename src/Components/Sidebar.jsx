import Korzina from '../images/Это магазинный сайт.jpg'
import '../App.css'

export default function Sidebar({setShow}){
    
    return ( <div id="sidebar">
    <div><a href='#'>Кресла</a></div>
    <div><a href='#'>Диваны</a></div>
    <div><a href='#'>Кровати</a></div>
    <div><a href='#'>Постельное бельё</a></div>
    <div><a href='#'>Шкафы</a></div>
    <div><a href='#'>Тумбочки</a></div>
    <div><a href='#'>Весь ассортимент</a></div>
    <input></input>
    <button>Найти</button>
    <a href='#' onClick={()=>{setShow(true)}}><img id='korzina' src={Korzina}/></a>
</div> );
}
 
