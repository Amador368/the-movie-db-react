import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';

import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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
                <Grid container>
                    {movies.map((item) => 
                        <Grid item xs={12} sm={4} md={3} key={item.id}>                          
                            <Card className="search-card">  
                                <img alt="image" src={getPosterImage(item.poster_path)}></img>                              
                                <CardContent>
                                {item.title}
                                </CardContent>
                                <CardActions>

                                </CardActions>
                            </Card>
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