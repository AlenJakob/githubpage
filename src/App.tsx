import "./App.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Offer from "./pages/Offer";
import Portfolio from "./pages/Portfolio";
import Hero from "./components/Hero";
import ContactBar from "./components/ContactBar";

function App() {
	return (
		<Box>
			<Box sx={{ position: "fixed", zIndex: 100, width: "100%", top: 0 }}>
				<ContactBar />
				<Stack
					direction={{ xs: "column", md: "row" }}
					sx={{
						background: "#1c3a62",
						px: 2,
						py: 1,
						gap: 2,
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Typography variant="h5">ROJALBUD</Typography>
					<Box sx={{ display: "flex", gap: 2 }}>
						<Button
							sx={{ background: "#325685" }}
							variant="outlined"
							component={Link}
							to="/">
							Home
						</Button>
						<Button
							sx={{ background: "#325685" }}
							variant="outlined"
							component={Link}
							to="/ofirmie">
							O firmie
						</Button>
						<Button
							sx={{ background: "#325685" }}
							variant="outlined"
							component={Link}
							to="/oferta">
							Oferta
						</Button>
						<Button
							sx={{ background: "#325685" }}
							variant="outlined"
							component={Link}
							to="/realizacje">
							Realizacje
						</Button>
						<Button
							sx={{ background: "#325685" }}
							variant="outlined"
							component={Link}
							to="/kontakt">
							Kontakt
						</Button>
					</Box>
				</Stack>
			</Box>

			<Box sx={{ pt: 12 }}>
				<Hero />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/ofirmie" element={<About />} />
					<Route path="/oferta" element={<Offer />} />
					<Route path="/realizacje" element={<Portfolio />} />
					<Route path="/kontakt" element={<Contact />} />
				</Routes>
			</Box>
		</Box>
	);
}

export default App;
