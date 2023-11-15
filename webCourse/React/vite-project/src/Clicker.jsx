import {useState} from "react";
function omg(){
    console.log('Clicked the button');
}
function handleForm(evt){
   evt.preventDefault();
   console.log('Submitted')
}
// export default function clicker(){
//     return(
//         <div>
//             {/* <p>Click the button</p>
//             <button onClick={omg}>Click me!!</button> */}
//             <form onSubmit={handleForm}>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }
// export default function clicker(){
//     const [num, setNum]= useState(0);
//     function increment(){
//         setNum(num+1);
//     }
//     return(
//         <div>
//             <h1>Num: {num}</h1>
//             <button onClick={increment}>Click me</button>
//         </div>
//     )
// }

export default function toggler(){
    const [isHappy, setHappy]= useState(true);
    const [counter, setCount]= useState(0);
    function fun(){
         setHappy(!isHappy);
         setCount(c=> c+1)
     }
     return(
         <div>
             <h1 onClick={fun}>{isHappy? "hello":"FuckOff"}</h1>
             <h2>Number of time clicked:{counter}</h2>
         </div>
     )
}