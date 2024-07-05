import './MainStyles.css'


export default function Vhod({login,setLogin,addLogin,password,setPassword,setShow,setRegist}){
   
    return <>
       Логин  <input className='loginVhod' 
                     value={login}
                     onChange={event=>setLogin(event.target.value)}/>
              <br/>
       Пароль <input className='passwordVhod' 
                     type='password' 
                     value={password} 
                     onChange={event=>setPassword(event.target.value)}/>
               <a onClick={()=>{setShow(false)
                                setRegist(true)}} 
                  style={{color:'white',
                          fontStyle:'oblique'}}>Регистрация</a>
              <br/>
              <button className='button1' onClick={addLogin}>✓</button>
           </>
           }

