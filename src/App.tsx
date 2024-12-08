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
			<ContactBar />
			<Box
				sx={{
					top: 0,
					display: "flex",
					height: "calc(100vh - 40px)",
				}}>
				<Stack
					direction="column"
					sx={{
						alignItems: "flex-start",
						background: "#1c3a62",
						gap: 2,
						p: 4,
					}}>
					<Box sx={{ py: 2 }}>
						<Typography variant="h5">ROJALBUD</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: 2,
							flexDirection: "column",
							".MuiButtonBase-root": {
								justifyContent: "left",
								fontSize: { xs: 16, xl: 20 },
								border: "1px solid transparent",
								":hover": {
									border: "1px solid #2c5791",
								},
							},
						}}>
						<Button component={Link} to="/oferta">
							Oferta
						</Button>
						<Button component={Link} to="/ofirmie">
							O firmie
						</Button>
						<Button component={Link} to="/realizacje">
							Realizacje
						</Button>
						<Button component={Link} to="/kontakt">
							Kontakt
						</Button>
					</Box>
				</Stack>

				<Box sx={{ flex: 1 }}>
					{/* <Hero /> */}
					<Routes>
						<Route path="/ofirmie" element={<About />} />
						<Route path="/oferta" element={<Offer />} />
						<Route path="/realizacje" element={<Portfolio />} />
						<Route path="/kontakt" element={<Contact />} />
					</Routes>
				</Box>
			</Box>
		</Box>
	);
}

export default App;
