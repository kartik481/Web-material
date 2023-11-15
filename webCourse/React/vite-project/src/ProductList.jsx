import { useState } from "react";
import ProductForm from './ProductForm.jsx';

function ProdList(){
    const [items, Items] = useState([{id:1, product:"Banana", quantity:8},
    {id:2, product:"Kiwi", quantity:5}])
    
    const addItem = (item)=>{
       
       Items((currItem) =>{
        return [...currItem, {...item, id:9}]
       })
    }
    return(
       
        <div>
            
            {items.map(i=> <li key={i.id}>{i.product}-<b>{i.quantity}</b></li>)}
            {<ProductForm addItem= {addItem}></ProductForm>}
        </div>
    )

}

export default ProdList;