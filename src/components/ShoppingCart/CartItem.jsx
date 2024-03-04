import { Button, Stack } from "react-bootstrap";
import formatCurrency from "../../utilities/formatCurrency";
import { useShoppingCart } from "../context/shoppingCartContext";
import DecreaseProduct from "../Buttons/DecreaseProduct";
import IncreaseProduct from "../Buttons/IncreaseProduct";
import { useEffect, useState } from "react";



function CartItem({ id, imgSrc, title, quantity, price },) {
    const { removeFromCart } = useShoppingCart();
    const [displayQuantity, setDisplayQuantity] = useState(quantity);

    useEffect(() => {
        // Verifica se há uma diferença antes de atualizar o estado local
        if (quantity !== displayQuantity) {
            setDisplayQuantity(quantity);
        }
    }, [quantity, displayQuantity]);


    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                key={id}
                src={`/ecommerce/public/${imgSrc?.replace('.', '')}`}
                alt={title}
                style={{
                    minWidth: "125px",
                    height: "75px",
                    objectFit: "cover"
                }}
            />
            <div className="me-auto">
                <div style={{ maxWidth: "50%" }}>
                    {title}{" "}
                    {
                        displayQuantity > 1 ? (
                            <span className="text-muted" style={{ fontSize: "1rem" }}>
                                x{displayQuantity}
                            </span>
                        ) : null
                    }
                </div>
                <div className="text-muted" style={{ fontSize: "1rem" }}>
                    {
                        formatCurrency(price)
                    }
                </div>
            </div>
            <DecreaseProduct id={id} quantity={quantity} />
            <div>
                {
                    formatCurrency(price * quantity)
                }
            </div>
            <IncreaseProduct id={id} quantity={quantity} />
            <Button variant="outline-danger" onClick={() => removeFromCart(id)}>&times;</Button>
        </Stack>
    )
}

export default CartItem;