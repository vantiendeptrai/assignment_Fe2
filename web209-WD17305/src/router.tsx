import { Navigate, createBrowserRouter, Outlet } from "react-router-dom";
import LayoutWebsite from "./components/layout/LayoutWebsite";
import LayoutAdmin from "./components/layout/LayoutAdmin";
import Dashboard from "./pages/dashboard";
import AdminProduct from "./pages/admin/product";
import AdminAdd from "./pages/admin/product/add";


export const router = createBrowserRouter([
    // Định nghĩa router cho website 
    { path: "/", element: <LayoutWebsite /> },
    {
        path: "/admin", element: <LayoutAdmin />, children: [
            { index: true, element: <Navigate to="dashboard" /> },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "product",
                element: <AdminProduct />
            },
            {
                path: "product/Add",
                element: <AdminAdd />
            }
        ]
    }

])