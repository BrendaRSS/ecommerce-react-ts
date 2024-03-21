import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CakesPage from "../pages/CakesPage";
import VulcanosPage from "../pages/VulcanosPage";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
    {
        path:"/signin",
        element: <LoginPage/>
    },
    {
        path:"/",
        element: <HomePage/>,
        children:[
            {
                path: "/cakes",
                element: <CakesPage />
            },
            {
                path: "/vulcanos",
                element: <VulcanosPage />
            },
            {
                path: "/cart",
                element: <CartPage />
            }
        ]
    }
]);

export default router;