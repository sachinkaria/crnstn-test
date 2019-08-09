import { FETCH_BEER, FETCH_BEERS_LIST } from '../actions/beers/types';

const INITIAL_STATE = { beers: [], beer: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BEERS_LIST:
      return { ...state, beers: action.payload };
    case FETCH_BEER:
      return { ...state, beer: action.payload };
    default:
      break;
  }
  return state;
}
