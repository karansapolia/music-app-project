import React, { useState } from "react";
import debounce from "lodash/debounce";
// import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import { fetchItunesSearchAPIResults } from "../../API";
import useMusicPlayer from "../../hooks/useMusicPlayer";

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: "100%",
    display: "flex",
    flexFlow: "row nowrap",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar = () => {
  const [state, setState] = useState({
    showResults: false,
    query: "",
    // Use this later to build a feature-rich search bar drop down
    catalogData: null,
    libraryData: null,
    loading: false,
  });

  const {
    state: musicContextState,
    setState: setMusicContextState,
  } = useMusicPlayer();

  const classes = useStyles();

  const handleSearch = async ({ target: { value: query } }) => {
    setState({
      query,
    });

    const searchQuery = query.replace(" ", "+");
    await debounceSearch(searchQuery);
  };

  const search = async query => {
    if (query.length === 0) {
      setState({
        catalogData: null,
        libraryData: null,
      });
      return;
    }

    setState({
      loading: true,
    });
    await searchCatalog(query);

    setState({
      loading: false,
    });
  };

  const debounceSearch = React.useCallback(debounce(search, 400), []);

  const searchCatalog = async query => {
    const catalogData = await fetchItunesSearchAPIResults(query);
    console.log("CatalogData : ", catalogData);

    setState({
      catalogData: catalogData.data,
    });

    setMusicContextState({ ...musicContextState, tracks: catalogData.data });
  };

  return (
    <div
      className={classes.search}
      style={{
        minWidth: "50%",
        width: "700px",
        maxWidth: "75%",
      }}
    >
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      {console.log(state)}
      <form
        onSubmit={e => {
          e.preventDefault();
          return false;
        }}
      >
        <InputBase
          placeholder="Search..."
          style={{
            width: "100%",
          }}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearch}
        />
      </form>
      {state.loading ? (
        <CircularProgress color="secondary" size="2rem" />
      ) : null}
    </div>
  );
};

export default SearchBar;
