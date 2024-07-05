import Footer from './Pages/C-sOfCatalog/FootCat'
import Header from './Pages/C-sOfCatalog/HeadCat'
import './Akcii.css'
import Photo1 from './images/1673632877_pro-dachnikov-com-p-dub-tabak-tsvet-mebeli-foto-3.jpg'
import Photo2 from './images/vstroennyy-shkaf-kupe-grenni.jpg'
import Photo3 from './images/erxxfwe81ag4o0ko48s8oww4o0ocog.jpg'



export default function Akcii(){
    return (<div>
              <Header/>
              <div id='akcii'>
                  <div> 
                       <img src={Photo1}></img>
                       <span id='MainText1'>SALE 20%</span><br/>
                       <span id='text1'>скидка на первый заказ<br/>по промокоду PERVIY</span>
                  </div>
                  <div> 
                      <img src={Photo2}></img>
                      <span id='MainText2'>2=1</span><br/>
                      <span id='text2'>при заказе "Шкаф-купе"от 2 позиций<br/>по промокоду SKIDKA2</span>
                  </div>
                 <div> 
                      <img src={Photo3}></img>
                      <span id='MainText3'>Бесплатная доставка</span><br/>
                      <span id='text3'>при заказе от 10 000р</span>
                </div>
              </div>
              <Footer/>
           </div>
           )}