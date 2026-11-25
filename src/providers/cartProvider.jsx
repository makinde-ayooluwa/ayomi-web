import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(cartItems.length)
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        setCartCount(cartCount + 1);
    }
    return (
        <CartContext.Provider value={{
            cartItems,
            cartCount,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}