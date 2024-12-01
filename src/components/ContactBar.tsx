import { Box, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function ContactBar() {
	return (
		<Box
			sx={{
				backgroundColor: "#e2f2ff",
				color: "#091525",
				padding: "8px 16px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
			<Box sx={{ display: "flex", gap: 2 }}>
				<Link
					href="mailto:example@email.com"
					color="primary.dark"
					variant="body2"
					sx={{
						display: "flex",
						alignItems: "center",
						textDecoration: "none",
						"&:hover": {
							color: "primary.dark",
						},
					}}>
					<EmailIcon sx={{ marginRight: 1, color: "primary.main" }} />{" "}
					example@email.com
				</Link>

				<Link
					href="tel:+1234567890"
					color="primary.dark"
					variant="body2"
					sx={{
						display: "flex",
						alignItems: "center",
						textDecoration: "none",
						"&:hover": {
							color: "primary.dark",
						},
					}}>
					<PhoneIcon sx={{ marginRight: 1, color: "primary.main" }} />{" "}
					+123 456 789
				</Link>
			</Box>
		</Box>
	);
}

export default ContactBar;
