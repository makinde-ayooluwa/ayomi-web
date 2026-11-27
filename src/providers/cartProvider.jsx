import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(cartItems.length)
    const addToCart = (product) => {
        if (cartItems.find((x) => x.id == product.id)) {
            console.log("Product exists")
            cartItems.find((x) => x.id == product.id).quantity++
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
            setCartCount(cartCount + 1);
        }
        console.log(cartItems)
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