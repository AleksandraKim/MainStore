import HeadContact from './HeadContact'
import Image from '../../images/images.jpg'
import Map from './Map'
import Footer from '../../Main/Footer'
import '../App.css'



export default function Contacts(){
    return (  <>
                <div style={{backgroundImage: `url(${Image})`,
                             width:'100%',
                             height:'1000px',
                             backgroundSize:'contain', 
                            }}>
                    <HeadContact/>
                    <div id='ContactsBody'>
                         <div id='ContactsBodyText'>
                              <h2>Привет!</h2>
                                <p>Ты можешь нас посетить по адресу:<br/> ул.Коммунистическая, 40.<br/>Индекс: 400005</p>  
                              <h3>Также ты можешь написать нам на почту:</h3>
                                <p>aleksines@yandex.ru</p>  
                              <h3>Номер для связи:</h3>
                                <p>+7(995)4097714</p></div>
                     <div id='ContactsBodyMap'>
                           <Map/>
                     </div>
                    </div>
                </div>
                    <Footer/>
              </>
      )
}