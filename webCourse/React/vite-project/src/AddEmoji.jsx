import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
 
export default function emoji(){
    const [emojis, addEmo]= useState([{id:uuidv4(), emoji:"😀"}]);
    function addEmoji(){
       addEmo(emo=>[...emojis, {id:uuidv4(), emoji:"😂"}])
    }
    function deleteEmoji(id){
        addEmo((prevEmo)=>{
            return prevEmo.filter(e=> e.id!=id)
        })
    }
    return(
        <div>
            {emojis.map(e=> <span key={e.id} onClick={()=>deleteEmoji(e.id)} style={{fontSize:"3rem"}}>{e.emoji}</span>)}
            <button onClick={addEmoji}>Add emoji</button>
        </div>
    )
}