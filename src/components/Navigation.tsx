import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<Box
			id="dupa"
			sx={{
				background: "linear-gradient(30deg, #1c3a62, #173d59)",
				gap: 2,
				px: 2,
				height: "100%",
				display: "flex",
				justifyContent: "space-between",
				position: "relative",
			}}>
			<Box
				id="dupa"
				sx={{
					display: "flex",
					alignItems: "center",
				}}>
				<Box sx={{ py: 2 }}>
					<Typography color="#fff" variant="h5">
						ROJALBUD
					</Typography>
				</Box>
			</Box>
			<Stack direction="row">
				<Box
					sx={{
						display: "flex",
						gap: 2,
						".MuiButtonBase-root": {
							justifyContent: "left",
							fontSize: { xs: 16, xl: 20 },
							border: "1px solid transparent",
							":hover": {
								border: "1px solid #2c5791",
							},
						},
					}}>
					<Button component={Link} to="/">
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
		</Box>
	);
};

export default Navigation;
