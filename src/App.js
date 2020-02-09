import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import  './App.css'

//views
import Home from './views/home';
import NewMovies from './views/new-movies';
import NewSeries from './views/new-series';
import PopularMovies from './views/popular-movies';
import Movie from './views/movie';
import Error404 from './views/error404';
//custom components
import HeaderLogo from './components/header';


const useStyles = makeStyles(theme => ({
  //
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
  },
  navLinksContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
 
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
        <Router>
          <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
              <div className={classes.navLinksContainer}>
                <HeaderLogo/>          
                <Button className="link">
                  <Link to="/" className="link__item">Inicio</Link>
                </Button>
                <Button className="link" key="2">
                  <Link to="/new-movies" className="link__item">Películas</Link>                  
                </Button>
                <Button className="link">
                  <Link to="/new-series" className="link__item">Series</Link>
                </Button>
                <Button className="link">
                  <Link to="/popular-movies" className="link__item">Más populares</Link>
                </Button> 
              </div>            
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
          <main>
            <div className="main-content">
              <Switch>
                <Route path="/" exact={true}>
                  <Home></Home>
                </Route>
                <Route path="/new-movies" exact={true}>
                  <NewMovies></NewMovies>
                </Route>
                <Route path="/new-series" exact={true}>
                  <NewSeries></NewSeries>
                </Route>
                <Route path="/popular-movies" exact={true}>
                  <PopularMovies></PopularMovies>
                </Route>
                <Route path="/movie/:id" exact={true}>
                  <Movie></Movie>
                </Route>
                <Route path="*">
                  <Error404></Error404>
                </Route>
              </Switch>
            </div>
          </main>
        </Router>
      </div>
    );
}

export default App;
