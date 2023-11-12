import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
]);
  
const rootEl = document.getElementById("root") as Element;

const root = ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)
