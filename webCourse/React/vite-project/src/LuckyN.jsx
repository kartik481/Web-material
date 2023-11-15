import { useState } from "react"
import {getRolls, sums} from "./utils"
import Button from "./Button.jsx"
import Dice from "./Dice"

function LuckyN({numDice=2, target=7}){
 const [dice, setDice] = useState(getRolls(numDice));
 const isWinner = sums(dice)===target;
 function roll(){
    setDice(getRolls(numDice));
 }
 return(
    <main className="LuckyN">
       <h1>Lucky{isWinner && ":You Win!!"}</h1>
       <Dice dice={dice}></Dice>
       <Button clickFn={roll} />
    </main>
 )
}

export default LuckyN