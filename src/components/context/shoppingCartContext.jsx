import { createContext, useContext, useState } from "react"

const shoppingCartContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
    return useContext(shoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);

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

    return (
        <shoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity}}>
            {children}
        </shoppingCartContext.Provider>
    )
}