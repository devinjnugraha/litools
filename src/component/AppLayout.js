import { Outlet } from "react-router";
import AppNavbar from "./AppNavbar";

export default function AppLayout() {
	return (
		<div className="wrapper-container">
			<AppNavbar />
			<Outlet />
		</div>
	);
}
