import React, { useContext } from "react";
// import { Menu, Input, Container } from "../common/helpers";
// import UserDropdown from "../UserDropdown";
import GlobalContext from "../../contexts/GlobalContext";
// import "./styles.css";
import { MODAL_STATE } from "../../contexts/constants";
import HideOnScroll from "../common/HideOnScroll";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SearchBar from "../Search/SearchBar";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  button: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
}));

const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleItemClick = (event, name) => {
    if (name === "sign-in") {
      dispatch({
        type: MODAL_STATE,
        payload: { ...state.modalState, open: true },
      });
      console.log("Modal opened");
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <HideOnScroll>
        <AppBar>
          <Toolbar
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "space-between",
              width: "700px",
              maxWidth: "90vw",
              margin: "0 auto",
            }}
          >
            <div>
              <IconButton edge="start" color="inherit" aria-label="home-button">
                <MusicNoteIcon fontSize="large" />
              </IconButton>
            </div>
            <SearchBar />
            <div className={classes.sectionDesktop}>
              {state.user && state.user.token ? (
                <IconButton
                  edge="end"
                  aria-label="Your account"
                  // aria-controls={menuId}
                  aria-haspopup="true"
                  // onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Badge badgeContent={3} color="secondary">
                    <AccountCircle />
                  </Badge>
                </IconButton>
              ) : (
                <IconButton
                  edge="end"
                  aria-label="Your account"
                  // aria-controls={menuId}
                  aria-haspopup="true"
                  // onClick={handleProfileMenuOpen}
                  color="inherit"
                  onClick={event => handleItemClick(event, "sign-in")}
                >
                  <Badge badgeContent={3} color="secondary">
                    <AccountCircle />
                  </Badge>
                </IconButton>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Header;
