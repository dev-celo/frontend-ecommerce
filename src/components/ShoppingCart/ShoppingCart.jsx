import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "../../utilities/formatCurrency";

function ShoppingCart({ isOpen }) {
    const { closeCart, cartItems, listCart } = useShoppingCart();

    const findItemById = (id) => {
        const item = cartItems?.find((item) => item.id === id)
        return item;
    }

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <h3 className="display-4">Shopping Cart</h3>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {
                        listCart?.map((item) => {
                            const cartItemQuantity = cartItems?.find((cartItem) => cartItem.id === item.id);
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
                    <div>
                        {
                            listCart.length === 0 ?
                            <p className="h5">Shopping cart is any!</p> : null
                        }
                    </div>
                    <div className="ms-auto fw-bold fs-5">
                        Total: {" "} {
                            listCart?.length > 0 &&
                            formatCurrency(listCart?.reduce((total, item) => {
                                const cart = findItemById(item.id);
                                return total + (Number(item?.price || 0) * cart?.quantity);
                            }, 0)) || 'R$0.00'
                        }
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart;