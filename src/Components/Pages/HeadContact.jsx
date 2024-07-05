import '../../Main/MainStyles.css'
import Logo from '../images/2549ff8b7b1f11eeb5a456181a0358a2_upscaled.png'
import { Link } from "react-router-dom";

export default function HeadContact(){

    return <div id="headerMain" style={{backgroundColor:'transparent'}}>
                <Link to='/#'>
                   <a href='#'>
                      <img id='logoContact' src={Logo} />
                   </a>
                </Link>
           </div>
}
