import {createBrowserRouter} from "react-router-dom";
import Register from "./src/pages/Register";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Error from "./src/pages/Error";
import Layout from "./src/features/Layout";
import TopRated from "./src/pages/TopRated";
import MovieVideo from "./src/pages/Video";
import MovieDetails from "./src/pages/Video/MovieVid";

export const routers = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/home',
                element:<Home />
            },
            {
                path:'/toprated',
                element:<TopRated />
            },
            {
                path:'/movievideo',
                element:<MovieVideo/>
            },
            {
                path:"/toprated/details/:filmId",
                element:<MovieDetails/>
            }
        ]
    },
    {
        path:'/',
        element:<Login />
    },
    {
        path:'/register',
        element:<Register />
    },
    {
        path:'/',
        element:<Error />
    }
])