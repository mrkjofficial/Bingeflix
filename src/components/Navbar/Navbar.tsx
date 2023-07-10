import { Sidebar } from "../";
import { useState } from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { AccountCircle, DarkMode, LightMode, Menu } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {
	const isAuthenticated = true;
	const [mobileOpen, setMobileOpen] = useState(false);
	const { classes, cx } = useStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<>
			<AppBar className={cx(classes.appBar)}>
				<Toolbar className={cx(classes.toolBar)}>
					{isMobile && (
						<IconButton className={cx(classes.menuButton)} edge="start" onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}>
							<Menu />
						</IconButton>
					)}
					<IconButton className={cx(classes.modeButton)}>{theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}</IconButton>
					{!isMobile && "Search..."}
					<Box>
						{!isAuthenticated ? (
							<Button color="inherit" onClick={() => {}}>
								Login &nbsp; <AccountCircle />
							</Button>
						) : (
							<Button color="inherit" component={Link} to={`/profile/:id`} className={cx(classes.linkButton)}>
								{!isMobile && <>My Movies &nbsp;</>}
								<Avatar style={{ width: 30, height: 30 }} alt="profile" src={`https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png`} />
							</Button>
						)}
					</Box>
					{isMobile && "Search..."}
				</Toolbar>
			</AppBar>
			<Box className={cx(classes.navBar)} component="nav">
				{isMobile ? (
					<Drawer anchor="left" classes={{ paper: classes.drawer }} ModalProps={{ keepMounted: true }} onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)} open={mobileOpen} variant="temporary">
						<Sidebar setMobileOpen={setMobileOpen} />
					</Drawer>
				) : (
					<Drawer classes={{ paper: classes.drawer }} open variant="permanent">
						<Sidebar setMobileOpen={setMobileOpen} />
					</Drawer>
				)}
			</Box>
		</>
	);
};

export default Navbar;
