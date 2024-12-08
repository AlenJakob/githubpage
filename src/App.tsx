import "./App.css";
import { Box, IconButton, useTheme } from "@mui/material";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Offer from "./pages/Offer";
import Portfolio from "./pages/Portfolio";
import Navigation from "./components/Navigation";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function App() {
	const theme = useTheme();
	const isMobile = theme.breakpoints.down("sm");
	const [isOpen, setIsOpen] = useState(true);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setIsOpen(open);
	};

	return (
		<Box
			sx={{
				display: "flex",
				height: "100vh",
				flexDirection: isMobile ? "column" : "row",
			}}>
			<Box
				sx={{
					width: isOpen ? "200px" : "0",
					transition: "width 0.3s ease",
					position: "fixed",
					zIndex: 1,
					height: "100%",
				}}>
				<Navigation isOpen={isOpen} toggleDrawer={toggleDrawer} />
			</Box>
			<Box
				sx={{
					position: "absolute",
					top: theme.spacing(2),
					left: theme.spacing(2),
					zIndex: 2,
				}}>
				<IconButton
					color="inherit"
					aria-label="menu"
					onClick={toggleDrawer(true)}
					sx={{ color: "#fff" }}>
					<MenuIcon sx={{ fontSize: "2rem" }} />
				</IconButton>
			</Box>
			<Box
				sx={{
					flex: 1,
					marginLeft: isMobile ? 0 : "250px",
					padding: theme.spacing(2),
					transition: "margin-left 0.3s ease",
				}}>
				<Routes>
					<Route
						path="/"
						element={<Navigate to="/offer" replace />}
					/>
					<Route path="/offer" element={<Offer />} />
					<Route path="/ofirmie" element={<About />} />
					<Route path="/realizacje" element={<Portfolio />} />
					<Route path="/kontakt" element={<Contact />} />
				</Routes>
			</Box>
		</Box>
	);
}

export default App;
