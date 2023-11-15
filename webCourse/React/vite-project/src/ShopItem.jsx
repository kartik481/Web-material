export default function shop({item}){
    return(
   
       <li key={item.id} style={{color : item.completed? "red": "green", 
        textDecoration: item.completed ? "line-through":"none"}}>{item.item} - {item.quantity}</li>
    
    )
}