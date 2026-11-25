import React, { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/appLayout'
import NotFound from '../components/common/notFound'
import Homepage from '../pages/homepage'
import { useProduct } from '../providers/productProvider'
import { useCategory } from '../providers/categoryProvider'
import { useCart } from '../providers/cartProvider'
import ProductDetails from '../pages/productDetails'
import Products from '../pages/products'

export default function AppRouter() {
    const [selectedCategory, setSelectedCategory] = useState("all");
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
                            <AppLayout cartCount={cartCount} menuOpen={menuOpen}
                                products={products} search={search} setSearch={setSearch}
                                setMenuOpen={setMenuOpen} addToCart={addToCart}>
                                <Homepage products={products}
                                    categories={categories}
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory} search={search} setSearch={setSearch} cartCount={cartCount}
                                    addToCart={addToCart} menuOpen={menuOpen}
                                    setMenuOpen={setMenuOpen}
                                />
                            </AppLayout>
                        </>
                    } />
                    <Route path='/products' element={
                        <>
                            <Outlet />
                        </>
                    }>
                        <Route index element={
                            <>
                                <AppLayout
                                    cartCount={cartCount}
                                    menuOpen={menuOpen}
                                    products={products}
                                    search={search}
                                    setSearch={setSearch}
                                    setMenuOpen={setMenuOpen}
                                    addToCart={addToCart}
                                >
                                    <Products categories={categories} products={products} addToCart={addToCart} />
                                </AppLayout>
                            </>
                        } />
                        <Route path=':id' element={
                            <>
                                <AppLayout cartCount={cartCount} menuOpen={menuOpen} products={products} search={search} setSearch={setSearch} setMenuOpen={setMenuOpen} addToCart={addToCart}>
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
