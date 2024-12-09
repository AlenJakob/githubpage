import { Box, IconButton, useTheme } from "@mui/material";

import { Outlet } from "react-router-dom";
import ContactBar from "../components/ContactBar";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import Navigation from "../components/Navigation";

const Layout = () => {
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => {
		setIsOpen((prev) => !prev);
	};

	const openDrawer = () => setIsOpen(true);
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}>
			<Box>
				<Box
					sx={{
						transition: "width 0.3s ease",
					}}>
					<Navigation isOpen={isOpen} toggleDrawer={toggleDrawer} />
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						p: theme.spacing(2),
						zIndex: 2,
					}}>
					<IconButton
						color="inherit"
						aria-label="menu"
						onClick={openDrawer}
						sx={{
							color: "#fff",
							":hover": {
								background: "#142a47",
							},
						}}>
						<MenuIcon sx={{ fontSize: "2rem" }} />
					</IconButton>
					<ContactBar />
				</Box>
				<Outlet />
			</Box>

			<ContactBar center />
		</Box>
	);
};

export default Layout;
