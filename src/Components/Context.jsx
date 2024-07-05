import { createContext } from 'react';
import { useState } from 'react';

export const MyContext = createContext([]);

export default function ContextProvider(){
let [arr,setArr]=useState([])
function Dobav(){
    setArr([...arr,elem])
}

    return <MyContext value={{Dobav,arr}}></MyContext>
}