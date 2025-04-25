import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Hero from "../components/Hero";
import Favorites from "../pages/Favorites";
import PhonesDetails from "../pages/PhonesDetails";






export const router = createBrowserRouter([
    {
      path:'/',
      Component: MainLayout,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
          element: <Home></Home>,
          hydrateFallbackElement:<p>Loading, please wait.....</p>,
          loader: ()  => fetch('phones.json'),
        },
        {
        path: '/favourites',
        Component: Favorites,
      },
      {
        path : '/about',
        element:<About></About>,
      },
      {
        path: '/phone-details',
        element: <PhonesDetails></PhonesDetails> ,
      }
          
    ]
    },
   
  ])
  
  export default router