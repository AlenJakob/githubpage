import {
	Box,
	Typography,
	Card,
	CardContent,
	Avatar,
	Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function AboutMeCard() {
	return (
		<Card
			sx={{
				maxWidth: 800,
				margin: "20px auto",
				backgroundColor: "transparent",
				color: "#fff",
				borderRadius: 2,
				border: "1px solid rgba(255, 255, 255, 0.1)",
			}}>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
				}}>
				<Box sx={{ width: 300 }}>
					<img
						style={{
							width: "inherit",
							borderRadius: 4,
							boxShadow:
								"4px 4px 10px 0px rgba(255, 255, 255, 0.1)",
						}}
						alt="My Photo"
						src="./avatar.png"
					/>
				</Box>
				<Box
					sx={{
						textAlign: "left",
						pl: { xs: 0, md: 4 },
						pt: { xs: 4, md: 0 },
					}}>
					<Typography
						variant="h4"
						component="div"
						sx={{ fontWeight: "bold", mb: 1 }}>
						O firmie
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						Jestem profesjonalistą z 15-letnim doświadczeniem w
						branży wykończeniowej i ogólnobudowlanej. Zajmuję się
						kompleksowym wykończeniem domów, mieszkań oraz pracami
						ogólnobudowlanymi. Specjalizuję się również w białym
						montażu.
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						Jeśli szukasz fachowca do wykończenia swojego wnętrza,
						możesz liczyć na moją pomoc i doświadczenie. Moje usługi
						obejmują pełny zakres prac – od drobnych remontów po
						kompleksowe wykończenia wnętrz.
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						Zapraszam do zapoznania się ze szczegółami mojej oferty
						w
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							gap: 1,
						}}>
						<Button
							component={Link}
							to="/offer"
							size="medium"
							variant="text"
							sx={{
								padding: 0,
								minWidth: "auto",
							}}>
							Zobacz ofertę
						</Button>

						<Button
							component={Link}
							to="/offer"
							size="medium"
							variant="text"
							sx={{
								padding: 0,
								minWidth: "auto",
							}}>
							Moje realizacje
						</Button>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}

export default AboutMeCard;
