import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import { fade, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import {URL_API, API_KEY} from '../utils/constants';

const useStyles = makeStyles(theme => ({
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
    }
}));

function SearchInput(props) {
       
    const classes = useStyles();
   
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
        let movies = await response.json();
        if(s == "") {
            //props.goBack();
            //debugger
            //history.goForward()
            //debugger
        }
        if(movies.errors){
            console.log("query", s)
            movies = []
        } else {

        }
        setSearchValue(s);
        
        setMovieList(movies);
        props.callbackFromParent(movies)
        })();
    }, [location.search]);
    
    
    
    const onChangeSearch = e => {
        const urlParams = queryString.parse(location.search);
        urlParams.s = e.target.value;
        history.push(`/search?${queryString.stringify(urlParams)}`);
        setSearchValue(e.target.value);
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>            
            <InputBase
                value={searchValue}
                onChange={onChangeSearch}
                placeholder="Buscar película…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
}

export default withRouter(SearchInput);