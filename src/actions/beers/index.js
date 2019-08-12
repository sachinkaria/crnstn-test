import axios from 'axios';
import { FETCH_BEERS_LIST, FETCH_BEER } from './types'

export const getBeers = () => {
    return function (dispatch) {
        axios.get('https://api.punkapi.com/v2/beers')
            .then((response) => {
                dispatch({
                    type: FETCH_BEERS_LIST,
                    payload: response.data
                });
            })
    };
};

export const getBeer = (id) => {
    return function (dispatch) {
        axios.get(`https://api.punkapi.com/v2/beers/${id}`)
            .then((response) => {
                dispatch({
                    type: FETCH_BEER,
                    payload: response.data[0]
                });
            })
    };
};