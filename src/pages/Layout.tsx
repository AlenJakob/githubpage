import { Box, IconButton } from "@mui/material";

import { Outlet } from "react-router-dom";
import ContactBar from "../components/ContactBar";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import Navigation from "../components/Navigation";
import NavigationMobile from "../components/NavigationMobile";
import { useMediaQuery } from "@mui/material";

const Layout = () => {
	const [isOpen, setIsOpen] = useState(false);
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

	const toggleDrawer = () => {
		setIsOpen((prev) => !prev);
	};

	const openDrawer = () => setIsOpen(true);
	const customStyles = isDesktop ? { justifyContent: "flex-end" } : {};
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
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						zIndex: 2,
						width: "100%",
						backgroundColor: "#152841",
					}}>
					{!isDesktop && (
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
					)}
					<ContactBar sx={customStyles} />
				</Box>
				<Box
					sx={{
						transition: "width 0.3s ease",
					}}>
					{isMobile && (
						<NavigationMobile
							isOpen={isOpen}
							toggleDrawer={toggleDrawer}
						/>
					)}

					<Box>
						<Navigation />
						<Outlet />
					</Box>
				</Box>
			</Box>

			<ContactBar center />
		</Box>
	);
};

export default Layout;
