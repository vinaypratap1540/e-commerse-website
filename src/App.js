import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLoaderData,
} from "react-router-dom";
import Cart from "./pages/cart/Cart";
import { pData } from "./api/Api";
import Products from "./components/products/Products";
import Login from "./pages/login/Login";
const Layout=()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:pData
      },
      {
        path:"/product/:id",
        element:<Products/>
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/login",
        element:<Login/>
      }
    ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;