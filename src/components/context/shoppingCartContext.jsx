import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { shirts, others } from "../../components/data/productsData";

const shoppingCartContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
    return useContext(shoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);
    const [listCart, setListCart] = useState([]);

    function getItemQuantity(id) {
        return cartItem.find(item => item.id == id)?.quantity || 0;
    }

    function increaseCartQuantity(id) {
        setCartItem(currentItems => {
            if (cartItem.find(item => item.id === id) == null) {

                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id) {
        setCartItem(currentItems => {
            if (cartItem.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id) {
        setCartItem((currentItems) => currentItems.filter(item => item.id !== id))
    }

    function cartQuantity() {
        cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    }

    function cartItems(id, productType) {
        // Decide de qual array de produtos fazer a busca com base no tipo
        const productsArray = productType === 'shirts' ? shirts : (productType === 'others' ? others : []);
        
        // Encontra o item no array de produtos
        const selectedItem = productsArray.find(item => item.id === id);
        
        if (!listCart.includes(selectedItem)) {
            setListCart((currentItems) => [...currentItems, selectedItem])
        }
    }

    return (
        <shoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartQuantity,
            cartItems
        }}>
            {children}
        </shoppingCartContext.Provider>
    )
}

shoppingCartContext.propTypes = {
    children: PropTypes.node.isRequired,
}