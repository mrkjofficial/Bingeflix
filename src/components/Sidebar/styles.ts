import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
	logoLink: {
		display: "flex",
		justifyContent: "center",
		padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
	},
	logo: {
		width: "70%",
	},
	listLink: {
		color: theme.palette.text.primary,
		textDecoration: "none",
	},
	genreImages: {
		filter: theme.palette.mode === "dark" ? "invert(1)" : "dark",
	},
	bigText: {
		color: theme.palette.text.primary,
		fontSize: 30,
	},
}));

export default useStyles;
