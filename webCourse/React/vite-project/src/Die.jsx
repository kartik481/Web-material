import './Die.css'
// function die({numSides=20}){
//     const d= Math.floor(Math.random()*numSides)
//     return(
//         <p>Random number for {numSides} die is {d}</p>
//     )
// }
function Die({val, color}){
    return(
        <div className="DieRoll" style={{backgroundColor:color}}>
            {val}
        </div>
    )
}
export default Die;