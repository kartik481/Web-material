import "./grid.css"
import {useState} from "react";

function randGenCol(arr){
    const idx = Math.floor(Math.random()*arr.length);
    return arr[idx];
}
export default function gridCol({colors}){
    const [color, isColor]= useState("white");
    function changeCol(){
        const randomColor= randGenCol(colors);
        isColor(randomColor);
    }
    return(
        <div className="grid" onClick={changeCol}  style={{backgroundColor:color}}></div>
    )
    
}