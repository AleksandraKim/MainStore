import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Korzina from "./Components/Pages/C-sOfCatalog/Korzina.jsx";
import Izbran from "./Components/Pages/C-sOfCatalog/Izbran.jsx";
import App from "./Main/App.jsx"
import Catalog from "./Components/Catalog.jsx";
import Akcii from "./Components/Akcii.jsx";
import Contacts from "./Components/Pages/Contacts.jsx";



const router = createBrowserRouter([
  {
    path: "*",
    element: <App/>,
  },
  {
    path: "/Contacts",
    element: <Contacts/>,
  },
  {
    path: "/Catalog",
    element: <Catalog/>,
  },
  {
    path: "/Akcii",
    element: <Akcii/>,
  },
  {
    path: "/Korzina",
    element: <Korzina/>,
  },
  {
    path: "/Izbran",
    element: <Izbran/>,
  },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
    <RouterProvider  basename={process.env.NODE_ENV === 'production' ? '/MainStore' : '/'} router={router}/>
   
  </React.StrictMode>
);