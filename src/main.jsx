import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './providers/productProvider.jsx'
import { CategoryProvider } from './providers/categoryProvider.jsx'
import { CartProvider } from './providers/cartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CategoryProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoryProvider>
    </ProductProvider>
  </StrictMode>,
)
