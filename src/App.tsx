import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Offer from "./pages/Offer";
import Portfolio from "./pages/Portfolio";
import Layout from "./pages/Layout";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						path="/"
						element={<Navigate to="/offer" replace />}
					/>
					<Route path="/offer" element={<Offer />} />
					<Route path="/ofirmie" element={<About />} />
					<Route path="/realizacje" element={<Portfolio />} />
					<Route path="/kontakt" element={<Contact />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
