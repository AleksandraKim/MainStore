import './Vhod.css'
import TextField from '@mui/material/TextField';



export default function Vhod({person,handleChange,handleSubmit,setShow,setRegist}){
   let reg=/^[a-zA-Z]+([.-]?\w+){0,1}@[a-z]+([.-]?\w+){0,1}\.\w+$/
    return <form onSubmit={handleSubmit}>
             <TextField name="login" color="white" id="standard-basic" label="Login" variant="standard"  className='loginVhod' 
                     value={person.login}
                     onChange={handleChange}/>
              <br/>
              <TextField name="password" color="white" id="standard-basic" label="Password" variant="standard" className='passwordVhod' 
                     type='password' 
                     value={person.password} 
                     onChange={handleChange}/>
               <a onClick={()=>{setShow(false)
                                setRegist(true)}} 
                  style={{color:'white',
                          fontStyle:'oblique',
                          paddingTop:'65px'}}>Регистрация</a>
              <br/>
                    {reg.test(person.login) && 
                     person.login && 
                     person.password?<button className='button1' onClick={()=>{setShow(false)
                     }} >✓</button>:<button className='button1' disabled>✓</button>}
           </form>
           }

