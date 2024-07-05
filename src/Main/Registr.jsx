import './MainStyles.css'


export default function Registr({login,setLogin,password,setPassword,setArrnames,arrnames,setRegist}){
   
    return <div id='OknoRegist'>
     Имя     <input className='RegisStr' 
                    value={arrnames.name} 
                    onChange={event=>setArrnames(arrnames.map(elem=>{
                              return {...elem,name:event.target.value}}))}/>
     <br/>
     Фамилия <input className='RegisStr' 
                    value={arrnames.surname} 
                    onChange={event=>setArrnames(arrnames.map(elem=>{
                              return {...elem,surname:event.target.value}}))}/>
     <br/>
     Логин   <input className='RegisStr' 
                    value={login} 
                    onChange={event=>setLogin(event.target.value)}/>
     <br/>
     Пароль  <input className='RegisStr' 
                    type='password' 
                    value={password} 
                    onChange={event=>setPassword(event.target.value)}/>
     <br/>
     Email   <input className='RegisStr' 
                    value={arrnames.pochta} 
                    onChange={event=>setArrnames(arrnames.map(elem=>{
                              return {...elem,pochta:event.target.value}
     }))}/>
     <br/>
             <button className='button2' 
                     onClick={()=>setRegist(false)}>✓</button>
           </div>

}
