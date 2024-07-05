import './MainStyles.css'

export default function Header({Logo,setShow}){

    return <div id="headerMain">
        <a id='Enter' onClick={()=>{setShow(true)}} href="#">✓</a>
        <h1 id='Name'>AM</h1>
        <img id='logot' src={Logo} width='70px' height='70px'/>
           </div>
}
