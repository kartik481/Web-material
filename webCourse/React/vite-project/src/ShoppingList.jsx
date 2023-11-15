import Shop from "./ShopItem.jsx";

function shoppingList({items}){

    return(
        <div>
            <ul>
                {items.map((i) => <Shop item={i} />)}
            </ul>
        </div>
    )
}

export default shoppingList;