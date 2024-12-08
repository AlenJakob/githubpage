import { Box, Button, Stack, Typography } from "@mui/material";

function Hero() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				color: "#fff",
			}}>
			<Box
				sx={{
					position: "relative",
					width: "100%",
					height: { xs: "250px", sm: "300px", md: "300px" },
					backgroundImage: "url(./example.jpg)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					overflow: "hidden",
				}}>
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundColor: "rgba(0, 0, 0, 0.6)",
						zIndex: 1,
					}}
				/>

				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						textAlign: "center",
						color: "white",
						zIndex: 2,
					}}>
					<Typography
						variant="h3"
						sx={{
							fontWeight: "bold",
							fontSize: {
								xs: "1.5rem",
								sm: "2rem",
								md: "3rem",
							},
						}}>
						Profesjonalne&nbsp;wykonczenia&nbsp;wnętrz <br />
						Prace ogólnobudowlane&nbsp;
						<br />
						Montaż
					</Typography>

					<Stack
						direction="row"
						justifyContent="center"
						spacing={2}
						sx={{ mt: 2 }}>
						<Button
							variant="contained"
							size="large"
							sx={{
								textTransform: "none",
								padding: "10px 20px",
								borderRadius: "5px",
								color: "#fff",
							}}>
							Zobacz Ofertę
						</Button>
						<Button
							variant="outlined"
							color="secondary"
							size="large"
							sx={{
								textTransform: "none",
								padding: "10px 20px",
								borderRadius: "5px",
							}}>
							Skontaktuj się
						</Button>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}

export default Hero;
