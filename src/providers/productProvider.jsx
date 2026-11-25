import React, { createContext, useContext, useState } from 'react'
const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            id: "hgH",
            name: "Classic Minimalist Watch",
            category: "accessories",
            price: 45000,
            oldPrice: 58000,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
            tag: "Best Seller"
        },
        {
            id: 2,
            name: "Premium Everyday Sneakers",
            category: "fashion",
            price: 38500,
            oldPrice: 45000,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
            tag: "Popular"
        },
        {
            id: 3,
            name: "Wireless Headphones",
            category: "electronics",
            price: 62000,
            oldPrice: null,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
            tag: "New Arrival"
        },
        {
            id: 4,
            name: "Modern Leather Handbag",
            category: "fashion",
            price: 52000,
            oldPrice: 65000,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700",
            tag: "Limited Offer"
        }
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
