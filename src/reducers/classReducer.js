import _ from 'lodash';
import { FETCH_CLASSES } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_CLASSES:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}