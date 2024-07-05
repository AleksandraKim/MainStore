import Logo from '../../images/2549ff8b7b1f11eeb5a456181a0358a2_upscaled.png'
import './style.css'
import { Link } from "react-router-dom";
import Korzina from '../../images/Это магазинный сайт.jpg'
import Izbran from '../../images/gas-kvas-com-p-serdechko-zheltoe-na-prozrachnom-fone-39.png'


export default function HeadCat(){

    return ( <div id="headerCat">
                <Link to='/Izbran'><a href='#'><img id='izbran' src={Izbran}/></a></Link>
                <Link to='/Korzina'><a href='#'><img id='korzina' src={Korzina}/></a></Link>
                <Link to='/#'><a href='#'><img id='logo'src={Logo}/></a></Link>
             </div>);
}
 
