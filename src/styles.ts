import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
	root: {
		display: "flex",
		height: "100%",
	},
	content: {
		flexGrow: 1,
		padding: "2rem",
	},
	toolbar: {
		height: "70px",
	},
}));

export default useStyles;
