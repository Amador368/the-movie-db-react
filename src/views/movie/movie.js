import React from 'react';
import {useParams} from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';

import useFetch from '../../hooks/useFetch';
import {URL_API, API_KEY} from '../../utils/constants';
import './movie.css';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';

export default function Movie(){
    let backdrop_path = null;
    let original_image_path = 'https://image.tmdb.org/t/p/original';
    let full_image_path = null;
    let movieDetail = null;
    const {id} = useParams();
    const movie = useFetch (
        `${URL_API}/movie/${id}?api_key=${API_KEY}&language=es-ES`
    );
    if (!movie.loading && movie.result != null) {
        movieDetail = movie.result;
        backdrop_path = movieDetail.backdrop_path;
        full_image_path = original_image_path + backdrop_path;
        console.log(movie);
    }
    const useStyles = makeStyles(theme => ({
        fixedMovie: {
            backgroundColor: fade('rgb(1,1,1)', .9),
            backgroundImage: `url(${full_image_path})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            height: '100vh',
        }
    }));
    function getPosterImage(image){
        return 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + image;
    }
    function hasMovie(){
        return !movie.loading && movie.result != null
    }
    const classes = useStyles();
    return (
        <div className="movie-detail">
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.fixedMovie}>
                        <div className="movie-detail__wrapper">
                            <Container className="movie-detail__container">
                                {hasMovie() ?(
                                    <Grid container spacing={0} item xs={12}>
                                        <Grid item xs={12} sm={6} md={4}>
                                            <img src={getPosterImage(movieDetail.poster_path)}></img>                                         
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={8}>
                                            <h1 className="movie-detail__title">{movieDetail.title}</h1>
                                            <h2 className="movie-detail__date">({movieDetail.release_date})</h2>
                                            <p className="movie-detail__overview">{movieDetail.overview}</p>
                                            <Grid item xs={12}>
                                                <h3 className="movie-detail__genre-title">Géneros</h3>
                                                {movieDetail.genres.map((item) => 
                                                    <Chip className="movie-detail__genre" label={item.name} key={item.id}  />
                                                )}
                                            </Grid>
                                        </Grid>                                        
                                    </Grid>
                                ) : (
                                    <div></div>
                                )}
                            </Container>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}