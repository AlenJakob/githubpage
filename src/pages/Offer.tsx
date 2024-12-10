import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import CardOffer from "../components/CardOffer";

const offerList = [
	{
		title: "Malowanie ścian",
		content:
			"Profesjonalne malowanie, które nada Twoim pomieszczeniom świeżości i estetyki. Korzystam z wysokiej jakości farb, by efekt cieszył przez lata.",
		img: "https://www.caparol.pl/fileadmin/_processed_/8/1/csm_Malowanie_%C5%9Bcian_zim%C4%85_%E2%80%93_jak_si%C4%99_przygotowa%C4%87_do_zimowego_remontu_wn%C4%99trza_c590794916.jpg",
	},
	{
		title: "Montaż paneli podłogowych",
		content:
			"Precyzyjne układanie paneli, które podkreślą charakter każdego wnętrza. Gwarantuję trwałość i estetykę wykonania.",
		img: "https://media.istockphoto.com/id/1130316603/pl/zdj%C4%99cie/remont-domu-ze-zmian%C4%85-pod%C5%82ogi-z-dywan%C3%B3w-na-soli.jpg?s=1024x1024&w=is&k=20&c=WUiXwmHcLJ4xCfiR7aTXJPhXC3Ln2wK8AlDLRLoJzfI=",
	},
	{
		title: "Szpachlowanie i gładzie",
		content:
			"Idealnie równe ściany to podstawa udanych prac wykończeniowych. Wykonuję szpachlowanie z dbałością o każdy szczegół, przygotowując powierzchnie pod malowanie lub inne wykończenie.",
		img: "https://www.rigips.pl/sites/default/files/styles/max_full_hd/public/2023-02/Rigips_szpachlowanie.jpg?itok=PqxUqFhX",
	},
	{
		title: "Układanie płytek",
		content:
			"Realizuję układanie płytek w kuchniach, łazienkach i innych pomieszczeniach. Wykonuję zarówno klasyczne, jak i niestandardowe wzory.",
		img: "https://imgix.obi.de/api/disc/cms/public/dam/PL-ASSETS/porady-i-inspiracje/mieszkac/sciany-podlogi-sufity/ukladanie-plytek-podlogowych-w-9-krokach/mezczyzna-uk-adaj-cy-p-ytki.jpg",
	},
	{
		title: "Zabudowy z płyt gipsowo-kartonowych",
		content:
			"Tworzę funkcjonalne i estetyczne zabudowy, ścianki działowe oraz sufity podwieszane, które nadają wnętrzom nowoczesnego charakteru.",
		img: "https://b.assecobs.com/_res_/lubar/img/aktualnosci/profile-do-suchej-zabudowy-rodzaje-wymiary-montaz-blog-lubar.jpg",
	},
	{
		title: "Montaż mebli i futryn drzwiowych",
		content:
			"Oferuję składanie i montaż mebli oraz futryn drzwiowych z najwyższą starannością, aby zapewnić idealne dopasowanie do wnętrza.",
		img: "https://s7g10.scene7.com/is/image/KingfisherDigital/29aed753203ace66ca0641fe19978fa0868670fd?$WCMS_NPI_FW_L$",
	},
];

const Offer = () => {
	return (
		<Box py={3}>
			<Box pb={4}>
				<Typography color="#fff" variant="h4">
					Zakres usług
				</Typography>
			</Box>
			<Box>
				<Grid
					sx={{ justifyContent: "center" }}
					container
					spacing={4}
					alignItems="stretch">
					{offerList.map(({ title, content, img }) => (
						<Grid key={title}>
							<CardOffer
								title={title}
								content={content}
								img={img}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Offer;

// Zakres usług
// 1. Montaż paneli podłogowych
// Precyzyjne układanie paneli, które podkreślą charakter każdego wnętrza. Gwarantuję trwałość i estetykę wykonania.

// 2. Szpachlowanie i gładzie
// Idealnie równe ściany to podstawa udanych prac wykończeniowych. Wykonuję szpachlowanie z dbałością o każdy szczegół, przygotowując powierzchnie pod malowanie lub inne wykończenie.

// 3. Układanie płytek
// Realizuję układanie płytek w kuchniach, łazienkach i innych pomieszczeniach. Wykonuję zarówno klasyczne, jak i niestandardowe wzory.

// 4. Zabudowy z płyt gipsowo-kartonowych
// Tworzę funkcjonalne i estetyczne zabudowy, ścianki działowe oraz sufity podwieszane, które nadają wnętrzom nowoczesnego charakteru.

// 5. Montaż mebli i futryn drzwiowych
// Oferuję składanie i montaż mebli oraz futryn drzwiowych z najwyższą starannością, aby zapewnić idealne dopasowanie do wnętrza.

// 6. Malowanie ścian
// Profesjonalne malowanie, które nada Twoim pomieszczeniom świeżości i estetyki. Korzystam z wysokiej jakości farb, by efekt cieszył przez lata.
