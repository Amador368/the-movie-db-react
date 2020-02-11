import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import  './App.css'

//views
import Home from './views/home';
import NewMovies from './views/new-movies';
import NewSeries from './views/new-series';
import PopularMovies from './views/popular-movies';
import Movie from './views/movie/movie';
import Error404 from './views/error404';
import Search from './views/search';
import SearchInput from './components/search-input'
//custom components
import HeaderLogo from './components/header';

const useStyles = makeStyles(theme => ({
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
  }
}));
 
function App (){
   
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
 
  const myCallback = (dataFromChild) => {
    var theMovies = dataFromChild.results;
    setMovies(theMovies);
  }

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
            <SearchInput callbackFromParent={myCallback}/>
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
              <Route path="/search" exact={true}>
                <Search movies={movies}/>
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
