import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Link} from 'react-router-dom';


import './search.css';

function Search(props){
    const {movies} = props;
    function getPosterImage(image){
        if (image) {
            return 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + image;
        }
        return "http://placehold.jp/300x450.png"
        
    }

    return(
        <div className="search-movie">
            <div>
            {movies && (
                <Grid container spacing={5}>
                    {movies.map((item) => 
                        <Grid item xs={12} sm={4} md={3} key={item.id}>  
                            <Link to={`/movie/${item.id}`}>
                                <ButtonBase>
                                    <Card className="search-card">  
                                        <CardContent>
                                            <img alt="movie" src={getPosterImage(item.poster_path)}></img>                             
                                        </CardContent>
                                        <CardActions>
                                            {item.title}
                                        </CardActions>
                                    </Card>
                                </ButtonBase>
                            </Link>
                        </Grid>
                    )} 
                </Grid>
            )}
            {(movies && movies.length == 0) && (
                <div>Sin resultados</div>
            )}
            </div>
        </div>
    );
}

export default Search;