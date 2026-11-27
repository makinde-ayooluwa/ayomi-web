import React, { createContext, useContext, useState } from 'react'
const ProductContext = createContext();
import iPhone from "../assets/images/phone.jpg"
import Tablet from "../assets/images/ipad.jpg"
import Headphone from "../assets/images/headphone.jpg"
import Jeans from "../assets/images/jeans.jpg"
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "iPhone 15 Pro Max 217x567",
            category: "accessories",
            price: 45000,
            oldPrice: 58000,
            rating: 4.8,
            image: iPhone,
            tag: "Best Seller"
        },
        {
            id: 2,
            name: "Samsung Tablet",
            category: "accessories",
            price: 38500,
            oldPrice: 45000,
            rating: 4.7,
            image: Tablet,
            tag: "Popular"
        },
        {
            id: 3,
            name: "Wireless Headphones",
            category: "accessories",
            price: 62000,
            oldPrice: null,
            rating: 4.9,
            image: Headphone,
            tag: "New Arrival"
        },
        {
            id: 4,
            name: "Modern Leather Jeans Trouser",
            category: "fashion",
            price: 52000,
            oldPrice: 65000,
            rating: 4.6,
            image: Jeans,
            tag: "Limited Offer"
        },
        
    ]);
    const getProductById = (id) => {
        try {
            // if (!id) return;
            const product = products.find((x) => x.id == id);
            return product;
        } catch (error) {

        }
    }
    const getRelatedProductByCategory = (category)=>{
        try {
            const relatedProducts = products.filter((x)=>x.category == category);
            console.log(relatedProducts)
            return relatedProducts;
        } catch (error) {
            
        }
    }
    return (
        <ProductContext.Provider value={{ products, getProductById, getRelatedProductByCategory }}>
            {children}
        </ProductContext.Provider>
    )
}
export const useProduct = () => (
    useContext(ProductContext)
)
