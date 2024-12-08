import {
	Box,
	Button,
	Stack,
	Typography,
	IconButton,
	Drawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

interface NavigationProps {
	isOpen: boolean;
	toggleDrawer: any;
}

const Navigation = ({ isOpen, toggleDrawer }: NavigationProps) => {
	return (
		<Drawer
			sx={{ flex: 1 }}
			anchor="left"
			open={isOpen}
			onClose={toggleDrawer}>
			<Box
				sx={{
					width: "240px",
					flexDirection: "column",
					background: "linear-gradient(30deg, #1c3a62, #173d59)",
					gap: 2,
					px: 2,
					height: "100%",
					display: "flex",
					position: "relative",
				}}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Box sx={{ py: 2 }}>
						<Typography color="#fff" variant="h5">
							ROJALBUD
						</Typography>
					</Box>
					<IconButton
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer}
						sx={{
							width: 40,
							height: 40,
							color: "#fff",
							zIndex: 2,
							borderRadius: 2,
							":hover": {
								backgroundColor: "rgba(255,255,255, .05)",
							},
						}}>
						<CloseIcon sx={{ fontSize: "2rem" }} />
					</IconButton>
				</Box>
				<Stack direction="column">
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
		</Drawer>
	);
};

export default Navigation;
