import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/appLayout'
import NotFound from '../components/common/notFound'
import Homepage from '../pages/homepage'

export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={
                        <>
                            <AppLayout>
                                <Homepage />
                            </AppLayout>
                        </>
                    } />
                    <Route path='*' element={
                        <>
                        <AppLayout>
                            <NotFound />
                        </AppLayout>
                        </>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
