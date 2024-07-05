import '../../App.css'
import{useState} from 'react'
import{useEffect} from 'react'
import { arr1 } from './Spiski1'
import { memo } from 'react';


const BodyCat = ({setAll,all}) => {
	let [metr,setMetr]=useState(0)


	useEffect(()=>{
		window.scrollTo({
			top: metr,
			behavior: 'smooth'
		});
	},[metr])
	
	
	


 
    return ( <div id='bodyCat' >
         <div id="content">
		    <div key={arr1[0].index}><a onClick={()=>{
				if(all===false){
					setAll(true)}
					setMetr(1050)
			}} href="#"><img src={arr1[0].src}/>
			  <p>{arr1[0].name}</p></a></div>
			  <div key={arr1[1].index}><a onClick={()=>{
				if(all===false){
					setAll(true)}
					setMetr(1050)
			}} href="#"><img src={arr1[1].src}/>
			  <p>{arr1[1].name}</p></a></div>
			  <div key={arr1[2].index}><a onClick={()=>{
				if(all===false){
					setAll(true)}
					setMetr(2700)
			}} href="#"><img src={arr1[2].src}/>
			  <p>{arr1[2].name}</p></a></div>
			  <div key={arr1[3].index}><a onClick={()=>{
				if(all===false){
					setAll(true)}
					setMetr(4300)
			}} href="#"><img src={arr1[3].src}/>
			  <p>{arr1[3].name}</p></a></div>
			  <div key={arr1[4].index}><a onClick={()=>{
				if(all===false){
					setAll(true)}
					setMetr(5900)
			}} href="#"><img src={arr1[4].src}/>
			  <p>{arr1[4].name}</p></a></div>
			  <div key={arr1[5].index}><a onClick={()=>{
				if(all===false){
					setAll(true)}
					setMetr(7500)
			}} href="#"><img src={arr1[5].src}/>
			  <p>{arr1[5].name}</p></a></div>
			  
		</div>
	

    </div> );
}
 
export default memo(BodyCat);