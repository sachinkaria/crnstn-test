import axios from 'axios';
import { FETCH_BEERS_LIST, FETCH_BEER } from './types'

export function getBeers() {
    return function (dispatch) {
        axios.get('https://api.punkapi.com/v2/beers')
            .then((response) => {
                dispatch({
                    type: FETCH_BEERS_LIST,
                    payload: response.data
                });
            })
    };
}

export function getBeer(id) {
    return function (dispatch) {
        axios.get(`https://api.punkapi.com/v2/beers/${id}`)
            .then((response) => {
                dispatch({
                    type: FETCH_BEER,
                    payload: response.data[0]
                });
            })
    };
}