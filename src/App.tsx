import useStyles from "./styles";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Actor, Home, Movie, Navbar, Profile } from "./components";

const App = () => {
	const { classes, cx } = useStyles();
	return (
		<div className={cx(classes.root)}>
			<CssBaseline />
			<Navbar />
			<main className={cx(classes.main)}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/actor/:id" element={<Actor />} />
					<Route path="/movie/:id" element={<Movie />} />
					<Route path="/profile/:id" element={<Profile />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
