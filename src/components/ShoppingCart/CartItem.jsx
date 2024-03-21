import { Button, Stack } from "react-bootstrap";
import formatCurrency from "../../utilities/formatCurrency";
import { useShoppingCart } from "../context/shoppingCartContext";
import DecreaseProduct from "../Buttons/DecreaseProduct";
import IncreaseProduct from "../Buttons/IncreaseProduct";
import { useEffect } from "react";




function CartItem({ id, imgSrc, title, quantity, price, size }) {
    const { removeFromCart, selectedSize } = useShoppingCart();

    useEffect(() => {
        // Additional logic for updates related to 'price' or 'size'
        // You can add more logic here as needed
      }, [price, size, quantity]);


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
                        quantity > 1 ? (
                            <span className="text-muted" style={{ fontSize: "1rem" }}>
                                x{quantity}
                            </span>
                        ) : null
                    }
                </div>
                <div className="text-muted" style={{ fontSize: "1rem" }}>
                    {
                        formatCurrency(price)
                    }
                </div>
                <div className="text-muted" style={{ fontSize: "1rem" }}>
                    Size: {size}
                </div>
            </div>
            <DecreaseProduct id={id} quantity={quantity} />
            <div>
                {
                    formatCurrency(price * quantity)
                }
            </div>
            <IncreaseProduct id={id} quantity={quantity} size={selectedSize} />
            <Button variant="outline-danger" onClick={() => removeFromCart(id)}>&times;</Button>
        </Stack>
    )
}

export default CartItem;