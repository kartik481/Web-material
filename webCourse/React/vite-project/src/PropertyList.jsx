import PropItem from "./PropItem.jsx";
import './property.css'
export default function property({items}){
    return(
        <div className="propertyList">
            
            {items.map((i) => <PropItem key={i.id} item={i} />)}
           
        </div>
    )
}