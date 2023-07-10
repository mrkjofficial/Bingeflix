import { makeStyles } from "tss-react/mui";

const drawerWidth = "15rem";

const useStyles = makeStyles()((theme) => ({
	appBar: {
		backgroundColor: "inherit",
		boxShadow: "none",
		color: "inherit",
		position: "fixed",
	},
	toolBar: {
		display: "flex",
		height: "100%",
		justifyContent: "space-between",
		marginLeft: drawerWidth,
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
		textDecoration: "none",
	},
	navBar: {
		[theme.breakpoints.up("sm")]: {
			flexShrink: 0,
			width: drawerWidth,
		},
	},
	drawer: {
		border: "none",
		width: drawerWidth,
	},
}));

export default useStyles;
