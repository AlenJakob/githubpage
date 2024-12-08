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
				}}>
				<Box>
					<Avatar
						alt="My Photo"
						src="./avatar.png"
						sx={{ width: 90, height: 90 }}
					/>
				</Box>
				<Box>
					<Typography
						variant="h4"
						component="div"
						sx={{ fontWeight: "bold", mb: 1 }}>
						O mnie
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
						<Button
							component={Link}
							to="/oferta"
							size="small"
							variant="text"
							sx={{
								padding: 0,
								minWidth: "auto",
								marginLeft: 1,
							}}>
							Zobacz ofertę
						</Button>
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
}

export default AboutMeCard;
