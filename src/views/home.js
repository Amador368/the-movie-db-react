import React from 'react';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import InfoIcon from '@material-ui/icons/Info';
import Container from '@material-ui/core/Container';

import { fade, makeStyles } from '@material-ui/core/styles';

import useFetch from '../hooks/useFetch';
import {URL_API, API_KEY} from '../utils/constants';



export default function Home(){
    
    let backdrop_path = null;
    let image_path = 'https://image.tmdb.org/t/p/original';
    let full_image_path = null;
    let small_image_path = 'https://image.tmdb.org/t/p/w500_and_h282_face'
    //let medium_image_path = 'https://image.tmdb.org/t/p/w1000_and_h563_face';
    let firstMovie = null;
    let allMovies = null;

    const movies = useFetch (
        `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
    );
   
    if (movies.result != null) {
        allMovies = movies.result.results;
        firstMovie = allMovies[Math.floor(Math.random() * 19)];
        backdrop_path = firstMovie.backdrop_path;
        full_image_path = image_path + backdrop_path;
    }
    const useStyles = makeStyles(theme => ({
        fixedMovie: {
            backgroundColor: fade('rgb(1,1,1)', .9),
            backgroundImage: `url(${full_image_path})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            height: '80vh',
            //padding: '2em'
        },
        container: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
        },
        homeButton: {
            textTransform: 'inherit'
        },
        homeButtonSmall: {
            display: 'flex',
            alignItems: 'flex-end'
        },
        link: {
            textDecoration: 'none'
        }
    }));
    const classes = useStyles();

    function getSmallImage(id){
        return small_image_path + id;
    }
    /*function getMediumImage(id){
        return medium_image_path + id;
    }*/
    return (
        <div className="home__movies">
            <Grid container>
                <Grid item xs={12}>
                    <Paper className="paper">
                        <div className={classes.fixedMovie}>                            
                            <Container className={classes.container}>
                                {movies.result != null ? (
                                    <div className="home__featured">
                                        <h1 className="home__featured-title">{firstMovie.title}</h1>
                                        <h2 className="home__featured-subtitle">{firstMovie.release_date}</h2>
                                        <p className="home__featured-description">{firstMovie.overview}</p>
                                        <div>
                                            <Link className={classes.link} to={`/movie/${firstMovie.id}`}>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    className={classes.homeButton}
                                                    startIcon={<InfoIcon />}>
                                                    Más información
                                                </Button>
                                            </Link>                                        
                                        </div>
                                    </div>  
                                ) : (
                                    <div>
                                    </div>
                                )}                          
                            </Container>           
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            {movies.result != null ? (
            <Grid container spacing={0}>
                {allMovies.map((movie) => 
                 <Grid className="grid-image__item" item xs={12} sm={4} md={3} key={movie.id} >
                    <Link className={classes.link} to={`/movie/${movie.id}`}>
                        <img className="home_image-small" alt={movie.title} src={getSmallImage(movie.backdrop_path)}>                            
                        </img>
                    </Link>
                 </Grid>
                )}                   
            </Grid>
            ) : (
                <div></div>
            )}
        </div>
    )
}