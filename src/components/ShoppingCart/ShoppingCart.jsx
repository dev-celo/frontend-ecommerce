import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "../../utilities/formatCurrency";

function ShoppingCart({ isOpen }) {
    const { closeCart, cartItem } = useShoppingCart();

    const STORAGE_KEY = 'list-cart';

    const storedCart = localStorage.getItem(STORAGE_KEY);
    const cartItems = JSON.parse(storedCart);

    const findItemById = (id) => {
        return cartItem.find((item) => item.id === id)
    }

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {
                        cartItems?.map((item) => {
                            const cartItemQuantity = cartItem.find((cartItem) => cartItem.id === item.id);
                            return (
                                <CartItem
                                    key={item.id}
                                    {...item}
                                    quantity={cartItemQuantity?.quantity}
                                />
                            )
                        }
                        )
                    }
                    <div className="ms-auto fw-bold fs-5">
                        Total {
                            cartItems?.length > 0 &&
                            formatCurrency(cartItems?.reduce((total, item) => {
                                const cart = findItemById(item.id);
                                return total + (Number(item?.price || 0) * cart?.quantity);
                            }, 0))
                        }
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart;