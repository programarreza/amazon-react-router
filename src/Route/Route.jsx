import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import DashboardLayout from "../Pages/DashboardLayout/DashboardLayout";
import EditProfile from "../Pages/EditProfile/EditProfile";
import Education from "../Pages/Education/Education";
import Home from "../Pages/Home/Home";
import ProductInfo from "../Pages/ProductInfo/ProductInfo";
import Products from "../Pages/Products/Products";
import Profile from "../Pages/Profile/Profile";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";

const myCreateRouter = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path : "/",
				element: <Home></Home>
			},
			{
				path : "/products",
				element : <Products></Products>,
				loader : () => fetch(`https://dummyjson.com/products`)
				
			},
			{
				path : "/products/:id",
				element : <ProductInfo></ProductInfo>,
				loader : (object) => fetch(`https://dummyjson.com/products/${object.params.id}`)
			},
			{
				path : "/about",
				element : <About></About>
			},
			{
				path : "/dashboard",
				element : <DashboardLayout></DashboardLayout>,
				children : [
					{
						path: "/dashboard",
						element: <Dashboard></Dashboard>
					},
					{
						path : "/dashboard/profile",
						element : <Profile></Profile>
					},
					{
						path : "/dashboard/editProfile",
						element: <EditProfile></EditProfile>
					},
					{
						path: "/dashboard/education",
						element: <Education></Education>
					}
				]
			}
			
		]

	}
])

export default myCreateRouter;