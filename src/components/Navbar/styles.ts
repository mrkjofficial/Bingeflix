import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
	toolBar: {
		display: "flex",
		height: "100%",
		justifyContent: "space-between",
		marginLeft: "240px",
		[theme.breakpoints.down("sm")]: {
			flexWrap: "wrap",
			margin: "0",
		},
	},
	menuButton: {
		color: "inherit",
		marginRight: theme.spacing(2),
		outline: "none",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	modeButton: {
		color: "inherit",
		marginLeft: theme.spacing(1),
	},
	linkButton: {
		"&:hover": {
			color: "white !important",
			textDecoration: "none",
		},
	},
}));

export default useStyles;
