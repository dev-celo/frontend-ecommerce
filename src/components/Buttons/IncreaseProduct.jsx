import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";

function IncreaseProduct({id, quantity }) {
    const { increaseCartQuantity } = useShoppingCart();
    return (
        <div>
            {
                quantity > 0 && (
                    <Button variant="outline-dark" onClick={() => {
                        increaseCartQuantity(id)
                    }}>+</Button>
                )
            }
        </div>
    )
}

export default IncreaseProduct;