import './MainStyles.css'
import { Link } from "react-router-dom";

export default function Menu({text,elem,elem1,setInfo}){

    return   <div>
               {elem}
               {elem1}
               {text}
               <div id='menu'>
                 <a onClick={()=>{setInfo(true)}} href="#">О НАС</a>
                 <Link to='/Catalog'>КАТАЛОГ</Link>
                 <Link to='/Akcii'>АКЦИИ</Link>
                 <Link to='/Contacts'>КОНТАКТЫ</Link>
                
               </div>
             </div>
}

