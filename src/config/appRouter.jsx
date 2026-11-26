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
import Categories from '../pages/categories'
import Cart from '../pages/cart'

export default function AppRouter() {
    const [search, setSearch] = useState("");
    const { cartCount, addToCart } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);
    const { products } = useProduct();
    const { categories } = useCategory();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={
                        <>
                            <AppLayout addToCart={addToCart} cartCount={cartCount} menuOpen={menuOpen} search={search} setMenuOpen={setMenuOpen} setSearch={setSearch} products={products}>
                                <Homepage products={products}
                                    categories={categories}
                                    search={search} setSearch={setSearch} cartCount={cartCount}
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
                                <AppLayout addToCart={addToCart} cartCount={cartCount} menuOpen={menuOpen} search={search} setMenuOpen={setMenuOpen} setSearch={setSearch} products={products}>
                                    <Products categories={categories} products={products} addToCart={addToCart} />
                                </AppLayout>
                            </>
                        } />
                        <Route path=':id' element={
                            <>
                                <AppLayout addToCart={addToCart} cartCount={cartCount} menuOpen={menuOpen} search={search} setMenuOpen={setMenuOpen} setSearch={setSearch} products={products}>
                                    <ProductDetails addToCart={addToCart} />
                                </AppLayout>
                            </>
                        } />
                    </Route>
                    <Route
                        path='/categories'
                        element={
                            <>
                                <Outlet />
                            </>
                        }
                    >
                        <Route index element={
                            <>
                                <AppLayout addToCart={addToCart} cartCount={cartCount} menuOpen={menuOpen} search={search} setMenuOpen={setMenuOpen} setSearch={setSearch} products={products}>
                                    <Categories />
                                </AppLayout>
                            </>
                        }
                        />
                    </Route>
                    <Route
                        path='/cart'
                        element={
                            <>
                                <Outlet />
                            </>
                        }
                    >
                        <Route index element={
                            <>
                                <AppLayout addToCart={addToCart} cartCount={cartCount} menuOpen={menuOpen} search={search} setMenuOpen={setMenuOpen} setSearch={setSearch} products={products}>
                                    <Cart />
                                </AppLayout>
                            </>
                        }
                        />
                    </Route>
                    <Route path='*' element={
                        <>
                            <AppLayout addToCart={addToCart} cartCount={cartCount} menuOpen={menuOpen} search={search} setMenuOpen={setMenuOpen} setSearch={setSearch} products={products}>
                                <NotFound />
                            </AppLayout>
                        </>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
