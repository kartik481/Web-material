import { useState } from "react";

function UsernameForm({addItem}) {
    
    const [formData, updateForm] = useState({product:"", quantity:""});
    const [isProductValid, setValidProd] = useState(false);
    const validate = (product)=>{
        if(product.length==0){
            setValidProd(false)
        }
        else{
            setValidProd(true);
        }
    }
    const handleChange=(evt)=>{
        if(evt.target.name=="product")
        {
            validate(evt.target.value)
        }
       
        const changeField = evt.target.name;
        const newValue = evt.target.value;
        updateForm(currData => {
            currData[changeField] = newValue;
            return {...currData}
        })
    }
    const handleSubmit= (evt)=>{
        evt.preventDefault();
        if(isProductValid)
        {
            addItem(formData);
            updateForm({product:"", quantity:""});
        }
       
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="product">Product Name:</label>
            <input id="product" type="text" placeholder="Product Name"
                 name="product" value={formData.product} onChange={handleChange}/>
                {!isProductValid && <p style={{color:"red"}}>Product name cannot be empty</p>}
        </div>
         <div>
            <label htmlFor="quantity">Quantity:</label>
            <input id="quantity" type="number" placeholder="Quantity"
                value={formData.quantity} onChange={handleChange} name="quantity" />

            <button disabled={!isProductValid}>Submit</button>
        </div>
        </form>
    )
}

export default UsernameForm;