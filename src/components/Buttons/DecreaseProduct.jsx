import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";

function DecreaseProduct({id, quantity}) {
    const { decreaseCartQuantity } = useShoppingCart();
    return (
        <div>
            {
                quantity > 1 && (
                    <Button id="decrease-button" data-testid="decrease-button" variant="outline-dark" onClick={() => decreaseCartQuantity(id)}>-</Button>
                )
            }
        </div>
    )
}

export default DecreaseProduct;