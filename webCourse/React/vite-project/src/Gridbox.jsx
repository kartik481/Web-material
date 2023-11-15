import "./grid.css"
import GridCol from "./GridColor";
const colors = ["#FF5733", "#47A0FF", "#81C784", "#F9A825", "#D84315", "#1976D2", "#388E3C", "#FF8F00", "#E53935", "#512DA8"]

export default function gridCol(){
    const boxes=[]
    for(let i=0;i<25;i++){
        boxes.push(<GridCol colors={colors }></GridCol>)
    }
    
    return(
        <div className="makeGrid">{boxes}</div>
    )
    
}