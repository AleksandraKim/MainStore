import FootCat from '../Pages/C-sOfCatalog/FootCat/FootCat.jsx'
import BodyCat from '../Pages/C-sOfCatalog/BodyCat/BodyCat.jsx'
import HeadCat from '../Pages/C-sOfCatalog/HeadCat/HeadCat.jsx'
import Mebel from '../Pages/C-sOfCatalog/Mebel/Mebel.jsx';
import './Catalog.css';
import React,{useState} from 'react'

export const MyContext=React.createContext()

export default function Catalog() {
  let [kor,setKor]=useState([])
  let [izb,setIzb]=useState([])
  let [all,setAll]=useState(false)
  let elem;

  if(all){
    elem=<Mebel/>
  }else{
    elem=<></>
  }


  return (<div id='catalog' >
               <MyContext.Provider value={{kor,setKor,izb,setIzb}}>
                  <HeadCat/>
                  <BodyCat setAll={setAll} all={all} /> 
                  {elem}
                  <FootCat/>
                </MyContext.Provider>
          </div>
         )}


