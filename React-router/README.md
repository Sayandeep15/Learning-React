# React Routing

react-router-dom is the standard routing library for React on the web, allowing you to navigate between pages (components) without reloading the page.
# Installation:
npm i react-router-dom

# ✅ React Router DOM Setup (with createBrowserRouter)
1. import {createBrowserRouter, RouterProvider, NavLink} from "react-router-dom";
2. const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

3. Render the router in your App.js: <b> < RouterProvider router={router} /></b>
4. Use Link/NavLink tags insteed of < a> tag
