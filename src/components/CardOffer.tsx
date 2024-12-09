import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CardOfferProps {
	title: string;
	content: string;
	img: string;
}

const CardOffer = ({ title, content, img }: CardOfferProps) => {
	return (
		<Card
			sx={{
				minWidth: 275,
				maxWidth: 380,
				height: "100%",
				background: "rgba(28, 58, 98,.2)",
				border: "1px solid #213650",
				color: "#fff",
			}}>
			<CardMedia
				component="img"
				height="220px"
				image={img}
				alt="Paella dish"
				sx={{ objectFit: "cover" }}
			/>
			<CardContent>
				<Typography
					textAlign="left"
					pb={2}
					variant="h5"
					component="div">
					{title}
				</Typography>
				<Typography
					textAlign="left"
					gutterBottom
					sx={{ color: "text.main", fontSize: 16 }}>
					{content}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardOffer;
