import { createContext, useContext } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({children})=>{
    const categories = [
  { name: "All Products", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500" },
  { name: "Fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500" },
  { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { name: "Lifestyle", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500" }
];
    return (
        <CategoryContext.Provider value={{categories}}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = ()=>{
    return useContext(CategoryContext)
}