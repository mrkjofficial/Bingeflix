import useStyles from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";

type Props = {
	setMobileOpen: (mobileOpen: boolean) => void;
};

const Sidebar = ({ setMobileOpen }: Props) => {
	const categories = [
		{
			label: "Popular",
			value: "popular",
		},
		{
			label: "Top Rated",
			value: "top_rated",
		},
		{
			label: "Upcoming",
			value: "upcoming",
		},
	];
	const genres = [
		{
			label: "Action",
			value: "Action",
		},
		{
			label: "Comedy",
			value: "comedy",
		},
		{
			label: "Drama",
			value: "drama",
		},
	];

	const { classes, cx } = useStyles();
	return (
		<>
			<Link className={cx(classes.logoLink)} to="/">
				<img alt="logo" className={cx(classes.logo)} src={logo} />
			</Link>
			<Divider />
			<List>
				<ListSubheader>Categories</ListSubheader>
				{categories.map(({ label, value }) => (
					<Link className={classes.listLink} key={value} to="/">
						<ListItem disablePadding onClick={() => {}}>
							<ListItemButton>
								{/* <ListItemIcon>
								<img src={genreIcons[label.toLowerCase()]} className={classes.genreImages} height={30} />
							</ListItemIcon> */}
								<ListItemText primary={label} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List>
				<ListSubheader>Genres</ListSubheader>
				{genres.map(({ label, value }) => (
					<Link className={classes.listLink} key={value} to="/">
						<ListItem disablePadding onClick={() => {}}>
							<ListItemButton>
								{/* <ListItemIcon>
									<img src={genreIcons[label.toLowerCase()]} className={classes.genreImages} height={30} />
								</ListItemIcon> */}
								<ListItemText primary={label} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
		</>
	);
};

export default Sidebar;
