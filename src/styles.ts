import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
	root: {
		display: "flex",
		height: "100%",
	},
	main: {
		flexGrow: 1,
		marginTop: theme.spacing(8),
		padding: theme.spacing(4),
	},
}));

export default useStyles;
