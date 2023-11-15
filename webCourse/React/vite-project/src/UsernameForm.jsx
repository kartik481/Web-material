import { useState } from "react";

function UsernameForm() {
    const [formData, updateForm] = useState({firstName:"", lastName:""});

    const handleChange=(evt)=>{
        const changeField = evt.target.name;
        const newValue = evt.target.value;
        updateForm(currData => {
            currData[changeField] = newValue;
            return {...currData}
        })
    }
    const handleSubmit= ()=>{
        console.log(formData.firstName, formData.lastName)
    }
    return (
        <div>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" placeholder="firstName"
                 name="firstName" value={formData.firstName} onChange={handleChange}/>
        </div>
         <div>
            <label htmlFor="lastName">last Name</label>
            <input id="lastName" type="text" placeholder="lastName"
                value={formData.lastName} onChange={handleChange} name="lastName" />

            <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    )
}

export default UsernameForm;