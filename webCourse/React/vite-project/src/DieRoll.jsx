export default function(){
    const num1 = Math.floor(Math.random()*3)+1;
    const num2 = Math.floor(Math.random()*3)+1;
    const style = {color: num1==num2 ? "green": "red"};
    return(
        <div style={style}>
            <h1>Die Roll matching</h1>
            <p>Num 1:{num1}</p>
            <p>Num 2:{num2}</p>
        </div>
    )
}