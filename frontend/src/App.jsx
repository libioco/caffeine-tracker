import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Settings from "./pages/Settings";

import "./styles.css";
import Profile from "./pages/Profile";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/data",
				element: <Data />,
			},
			{
				path: "/settings",
				element: <Settings />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

function App() {
	return (
		<div class="app">
			<div class="main-container">
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
