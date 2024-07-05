import '../../App.css'
import Vk from '../../images/icons/free-icon-vk-1236871.png'
import Inst from '../../images/icons/free-icon-instagram-739244.png'
import Teleg from '../../images/icons/free-icon-telegram-739260.png'

export default function FootCat(){
    return  <div id='footerCat'>
    <div className='adress'>
        <p className='location'>МЕСТОПОЛОЖЕНИЕ</p>
        <p className='locationStreet'> 40005, ул.Пражская, 16а</p>
     </div>
    <div class='social'>
    <p>СОЦИАЛЬНЫЕ СЕТИ</p>
    <p><a href='#' className='icons'><img src={Vk} width='20px'/></a>
       <a href='#' className='icons'><img src={Inst} width='20px'/></a>
       <a href='#' className='icons'><img src={Teleg} width='20px'/></a>
     </p>
    </div>
</div>
}