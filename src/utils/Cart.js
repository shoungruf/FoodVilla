import {useSelector, useDispatch} from "react-redux";
import { clearCart, removeItem } from "./redux/cartSlice";
import FoodItem from "./FoodItems";

const Cart = () =>{ 
    const CartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }
   

    return (
        <>
            <div>
                <h1>CartItems = {CartItems.length}</h1>
                <button className="" onClick={()=>handleClearCart()}> Clear </button>
                <div>
                    {CartItems.map((items) => (
                        <>
                        <FoodItem key = {items.id} {...items} />
                       
                        </>
                    ))}

                    </div>
            </div>
        
        
        </>

    )
}

export default Cart;