import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

import './index.css'
import router from './routes/router.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { CartProvider } from './context/AddToCartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { UtilitiesProvider } from './context/UtilitesContext.jsx'

createRoot(document.getElementById('root')).render(
    <LanguageProvider>
        <CartProvider>
            <AuthProvider>
                <UtilitiesProvider>
                    <RouterProvider router={router} />
                </UtilitiesProvider>
            </AuthProvider>
        </CartProvider>
    </LanguageProvider>
)
