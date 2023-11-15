import {useState} from "react";

export default function ScoreKepeer(){
    const [scores, setScore]= useState({p1Score:0, p2Score:0});
    function increP1(){
        setScore(newScore=>{
           return {...newScore, p1Score:newScore.p1Score+1}
        });
    }
    function increP2(){
        setScore(newScore=>{
           return {...newScore, p2Score:newScore.p2Score+1}
        });
    }
    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increP1}>+1 Player1</button>
            <button onClick={increP2}>+1 Player2</button>


        </div>
    )
}