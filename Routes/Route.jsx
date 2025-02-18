import { createBrowserRouter } from "react-router";
import Carousel from "../src/Components/Carousel/Carousel";
import App from "../src/App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    { 
        path: '/carousel',
        element:<Carousel></Carousel>,
    },
])
export default router