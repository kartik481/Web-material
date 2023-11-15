import Die from './Die.jsx'
import './Dice.css';
function dice({dice}){
    return(
      
        <section className="Dice">
            {dice.map((v,i)=>(
              <Die key={i} val={v} color="magenta"></Die>
            ))}
        </section>
    )
  };

export default dice;