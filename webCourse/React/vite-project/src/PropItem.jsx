import PropTypes from 'prop-types';
export default function shop({item}){
    return(
        <div key={item.id}>
            <h2>{item.name}</h2>
            <h3>Price: {item.price}$/night</h3>
            <h4>Rating: {item.rating}⭐</h4>
        </div>
        
    
    )
}

shop.propTypes={
    item:PropTypes.string
}