import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";

const MainLayout = () => {
	return (
		<div>
			<section className="flex justify-between px-24 mb-5 bg-gray-400 text-white font-semibold py-5">
				<div>
					<h1 className="text-4xl ">amazon</h1>
				</div>
				<nav className="">
					<ul className="flex justify-center gap-6">
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "bg-primary rounded-md px-2" : "" 
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/products"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "bg-primary rounded-md px-2" : ""
							}
						>
							Products
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "bg-primary rounded-md px-2" : ""
							}
						>
							About
						</NavLink>
						<NavLink
							to="/dashboard"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "bg-primary rounded-md px-2" : ""
							}
						>
							Dashboard
						</NavLink>
					</ul>
				</nav>
			</section>
			<div className="min-h-screen">
				<Outlet></Outlet>
			</div>

			<Footer></Footer>
		</div>
	);
};

export default MainLayout;