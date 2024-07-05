import Header from './Header.jsx'
import Menu from './Menu.jsx'
import Logo from './../images/2549ff8b7b1f11eeb5a456181a0358a2_upscaled.png'
import {useState} from 'react'
import Vhod from './Vhod.jsx'
import Registr from './Registr.jsx'
import Text from './Text.jsx'
import Image from '../images/images.jpg'

let names=[{id:'',
            name:'',
            surname:'',
            pochta:''
           }]


export default function Home() {
    let [login,setLogin] = useState('')
    let [arrnames,setArrnames] = useState(names)
    let [password,setPassword] = useState('')
    let [show,setShow] = useState(false)
    let [regist,setRegist]=useState(false)
    let [info,setInfo]=useState(false)
    let elem;
    let elem1;
    let text;
    let reg=/^\w+([.-]?\w+){0,1}@\w+([.-]?\w+){0,1}(.\w+)$/
   
 
   function addLogin(){
    if(reg.test(login) && password!==''){
       setShow(false)
     }}

    if(info){
     text=<div className='text'>
            <button className='closeInfo' onClick={()=>setInfo(false)}>x</button>
            <Text/>
          </div>
    }else{
     text=<p></p>
    }
 
    if(show && regist===false){
     elem=<div className='headVhod'>
            <button className='closeVhod' onClick={()=>setShow(false)}>x</button>
            <div className='divVhod'>
            <h2>Вход</h2>
               <Vhod login={login} 
                     setLogin={setLogin} 
                     addLogin={addLogin} 	
                     password={password} 
                     setPassword={setPassword} 
                     setShow={setShow}
                     setRegist={setRegist}
               />
            </div>
          </div>
    }else{
     elem=<p></p>
    }

    if(regist){
     elem1=<div class='headRegist'>
             <a class='closeRegist' onClick={()=>setRegist(false)}>x</a>
             <h2>Регистрация</h2>
            <Registr login={login} 
                     setLogin={setLogin} 	
                     password={password} 
                     setPassword={setPassword} 
                     setRegist={setRegist}
                     setArrnames={setArrnames}
                     arrnames={arrnames}/>
            </div>
       }else{
        elem1=<p></p>
       }
    
    return ( <>
                <div id='MainHome' style={{backgroundImage: `url(${Image})`,
                      
                    }}>
	                <Header Logo={Logo} setShow={setShow}/>
                      <Menu setInfo={setInfo} elem={elem} elem1={elem1} text={text}/>
                </div>
             </> );
}
 
