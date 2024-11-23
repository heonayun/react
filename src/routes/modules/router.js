import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/main/MainPage";
import Mind from "../../pages/mind/Mind";
import Layout from "../../pages/layout/Layout";
import PageNotFound from "../../pages/error/PageNotFound";
import Intro from "../../pages/intro/Intro";


const router = createBrowserRouter([
    {   
        path: '/',
        element : <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/mind',
                element: <Mind />
            }
        ]
    },
    {
        path: '/intro',
        element: <Intro />   
    },
    {
        path: '*',
        element: <PageNotFound />   
    }
])

export default router;