import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';

import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import {URL_API, API_KEY} from '../../utils/constants';
import './search.css';

function Search(props){
    const {location, history} = props;
    const [movieList, setMovieList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    
    useEffect(() => {
        (async () => {
          const searchValue = queryString.parseUrl(location.search);
          const { s } = searchValue.query;
          const response = await fetch(
            `${URL_API}/search/movie?api_key=${API_KEY}&language=es-ES&query=${s}&page=1`
          );
          const movies = await response.json();
    
          setSearchValue(s);
          setMovieList(movies);
        })();
    }, [location.search]);

    const onChangeSearch = e => {
        const urlParams = queryString.parse(location.search);
        urlParams.s = e.target.value;
        history.push(`?${queryString.stringify(urlParams)}`);
        setSearchValue(e.target.value);
    };
      
    function getPosterImage(image){
        if (image) {
            return 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + image;
        }
        return "http://placehold.jp/300x450.png"
        
    }

      return(
        <div className="search-movie">
            
            <Input value={searchValue} onChange={onChangeSearch} />
            <div>
            {movieList.results && (
                <Grid container>
                    {movieList.results.map((item) => 
                        <Grid item xs={12} sm={4} md={3} key={item.id}>
                          
                            <Card className="search-card">  
                                <img src={getPosterImage(item.poster_path)}></img>                              
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
            </div>
        </div>
      );
}

export default withRouter(Search);