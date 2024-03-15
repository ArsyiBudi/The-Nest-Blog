import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from "./component/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Author from "./pages/Author";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import CategoriesPost from "./pages/CategoryPost";
import AuthorPost from "./pages/AuthorPost";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
        {index: true, element: <Home />},
        {path: "post/:id", element: <PostDetail />},
        {path: "register", element: <Register />},
        {path: "login", element: <Login />},
        {path: "profile:/id", element: <UserProfile />},
        {path: "authors", element: <Author />},
        {path: "create", element: <CreatePost />},
        {path: "posts/categories/:category", element: <CategoriesPost />},
        {path: "post/user/:id", element: <AuthorPost />},
        {path: "mypost/:id", element: <Dashboard />},
        {path: "post/:id/edit", element: <EditPost />},
        {path: "logout", element: <Logout />},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
