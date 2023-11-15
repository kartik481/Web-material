export default function color({props}){
    return(
        <div><h1>Colors</h1>
        <ul>
            {props.map((color) => <li style={{color:color}}>{color}</li>)}
        </ul>
        </div>
    )
}