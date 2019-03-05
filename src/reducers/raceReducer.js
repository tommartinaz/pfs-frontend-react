import _ from 'lodash';
import { FETCH_RACES } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_RACES:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}