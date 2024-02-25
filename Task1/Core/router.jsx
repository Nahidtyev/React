import {createBrowserRouter} from "react-router-dom";
import Layout from "./src/features/Layout";
import Home from "./src/pages/Home";
import CardDetail from "./src/components/CardDetail";
import Promote from "./src/pages/Promote";

export const routers = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/carddetail',
                element:<CardDetail/>
            },
            {
                path:'/promote',
                element:<Promote/>
            }
        ]
    }
])