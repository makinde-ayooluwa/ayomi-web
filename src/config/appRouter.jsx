import React, { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/appLayout'
import NotFound from '../components/common/notFound'
import Homepage from '../pages/homepage'
import { useProduct } from '../providers/productProvider'
import { useCategory } from '../providers/categoryProvider'
import { useCart } from '../providers/cartProvider'
import ProductDetails from '../pages/productDetails'

export default function AppRouter() {
    const [selectedCategory, setSelectedCategory] = useState("All Products");
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const { products } = useProduct();
    const { categories } = useCategory();
    const { cartCount, addToCart } = useCart()
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={
                        <>
                            <AppLayout cartCount={cartCount} menuOpen={menuOpen} products={products} search={search} setSearch={setSearch} setMenuOpen={setMenuOpen} addToCart={addToCart}>
                                <Homepage products={products} categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} search={search} setSearch={setSearch} cartCount={cartCount} addToCart={addToCart} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                            </AppLayout>
                        </>
                    } />
                    <Route path='/products'>
                        <Route index element={
                            <>
                                <Outlet />
                            </>
                        } />
                        <Route path=':id' element={
                            <>
                                <AppLayout>
                                    <ProductDetails addToCart={addToCart} />
                                </AppLayout>
                            </>
                        } />
                    </Route>
                    <Route path='*' element={
                        <>
                            <AppLayout cartCount={cartCount} menuOpen={menuOpen} products={products} search={search} setSearch={setSearch} setMenuOpen={setMenuOpen} addToCart={addToCart}>
                                <NotFound />
                            </AppLayout>
                        </>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
