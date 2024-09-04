import Header from '../Header/Header.jsx'
import Menu from '../Menu/Menu.jsx'
import Logo from '../../images/2549ff8b7b1f11eeb5a456181a0358a2_upscaled.png'
import {useState} from 'react'
import Vhod from '../Vhod/Vhod.jsx'
import Registr from '../Registr/Registr.jsx'
import Text from '../Text/Text.jsx'
import Image from '../../images/images.jpg'
import "./Home.css"

let names=[{login:'',
            password:'',
           }]
let namesReg=[{name:'',
               surname:'',
               login:'',
               password:'',
               pochta:''
           }]


export default function Home() {
    let [person,setPerson]=useState(names)
    let [personReg,setPersonReg]=useState(namesReg)
    let [show,setShow] = useState(false)
    let [regist,setRegist]=useState(false)
    let [info,setInfo]=useState(false)
    let [personList,setPersonList]=useState([])
    let elem;
    let elem1;
    let text;
    
   
    let addPerson=()=>{
      setPersonList([...personList,person])
     }

    let handleChange=(e)=>{
      let {name,value}=e.target
      setPerson({
       ...person,
       [name]:value
      })
  }
 
  let handleSubmit=(e)=>{
     e.preventDefault()
     let{login,password}=person
     if(login&&password){
        addPerson({
         login,password,id:Date.now()
        })
     }
  }
  
 

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
               <Vhod handleChange={handleChange}
                     handleSubmit={handleSubmit}
                     setShow={setShow}
                     setRegist={setRegist}
                     person={person}
                    
               />
            </div>
          </div>
    }else{
     elem=<p></p>
    }

    if(regist){
     elem1=<div className='headRegist'>
             <a className='closeRegist' onClick={()=>setRegist(false)}>x</a>
             <h2>Регистрация</h2>
            <Registr setRegist={setRegist}
                     setPersonReg={setPersonReg}
                     personReg={personReg}/>
            </div>
       }else{
        elem1=<p></p>
       }
    
    return ( <>
                <div id='MainHome' style={{backgroundImage: `url(${Image})`, 
                                          }}>
	                <Header Logo={Logo} setInfo={setInfo} setShow={setShow}/>
                  <Menu setInfo={setInfo} setShow={setShow} setRegist={setRegist} elem={elem} elem1={elem1} text={text}/>
                </div>
             </> );
}
 
