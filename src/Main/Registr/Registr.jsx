import './Registr.css'
import TextField from '@mui/material/TextField';


export default function Registr({setPersonReg,personReg,setRegist}){
   
    return <form>
     <TextField name="name" color="white" id="standard-basic" label="Name" variant="standard" className='RegisStr' 
                    value={personReg.name} 
                    onChange={event=>setPersonReg(personReg.map(elem=>{
                              return {...elem,name:event.target.value}}))}/>
     <br/>
     <TextField name="surname" color="white" id="standard-basic" label="Surname" variant="standard" className='RegisStr' 
                    value={personReg.surname} 
                    onChange={event=>setPersonReg(personReg.map(elem=>{
                              return {...elem,surname:event.target.value}}))}/>
     <br/>
     <TextField name="login" color="white" id="standard-basic" label="Login" variant="standard" className='RegisStr' 
                    value={personReg.login} 
                    onChange={event=>setPersonReg(personReg.map(elem=>{
                        return {...elem,login:event.target.value}}))}/>
     <br/>
     <TextField name="password" color="white" id="standard-basic" label="Password" variant="standard" className='RegisStr' 
                    type='password' 
                    value={personReg.password} 
                    onChange={event=>setPersonReg(personReg.map(elem=>{
                        return {...elem,password:event.target.value}}))}/>
     <br/>
     <TextField name="email" color="white" id="standard-basic" label="Email" variant="standard" className='RegisStr' 
                    value={personReg.pochta} 
                    onChange={event=>setPersonReg(personReg.map(elem=>{
                              return {...elem,pochta:event.target.value}
     }))}/>
     <br/>
     
             <button className='button2' 
                     onClick={()=>setRegist(false)}>✓</button>
           </form>

}
