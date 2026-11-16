import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/appLayout'
import NotFound from '../components/common/notFound'

export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={
                        <>
                            <AppLayout>
                                <div>Homepage</div>
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
