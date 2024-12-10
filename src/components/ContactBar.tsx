import { Box, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { CSSProperties } from "react";

function ContactBar({ center, sx }: { center?: boolean; sx?: CSSProperties }) {
	return (
		<Box
			sx={{
				color: "#e2f2ff",
				padding: "8px 16px",
				display: "flex",
				justifyContent: center ? "center" : "space-between",
				alignItems: "center",
				...sx,
			}}>
			<Box
				sx={{
					display: "flex",
					gap: 2,
					width: "100%",
				}}>
				<Link
					href="mailto:example@email.com"
					color="primary.light"
					variant="body2"
					sx={{
						display: "flex",
						alignItems: "center",
						textDecoration: "none",
						"&:hover": {
							color: "primary.main",
						},
					}}>
					<EmailIcon sx={{ marginRight: 1, color: "primary.main" }} />{" "}
					example@email.com
				</Link>

				<Link
					href="tel:+1234567890"
					color="primary.light"
					variant="body2"
					sx={{
						display: "flex",
						alignItems: "center",
						textDecoration: "none",
						"&:hover": { color: "primary.main" },
					}}>
					<PhoneIcon sx={{ marginRight: 1, color: "primary.main" }} />{" "}
					+123 456 789
				</Link>
			</Box>
		</Box>
	);
}

export default ContactBar;
