import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  //
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 130,
      '&:focus': {
        width: 200,
      },
    },
  },
  //
}));


const App = ({}) => {
  const classes = useStyles();
    return (
      <div className="App jss1 jss2">
        <AppBar>
          <Toolbar className={classes.toolBar}>
            <Typography variant='subtitle1' color='inherit'>The Movie Db React</Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
              <SearchIcon/>
              </div>
              <InputBase
                placeholder="Buscar película…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default App;
