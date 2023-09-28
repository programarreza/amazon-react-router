import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
	return (
		<div className="font-bold text-2xl ">
			<h2>This is dashboard</h2>

			<div className="flex">
				<div className="w-[20%] text-black bg-red-200">
					<div><Link to="/dashboard">Dashboard</Link></div>
					<div><Link to="/dashboard/profile">Profile</Link></div>
					<div><Link to="/dashboard/editProfile">Edit Profile</Link></div>
					<div><Link to="/dashboard/education">Education</Link></div>
				</div>

				<div className="min-h-screen w-[80%]">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;