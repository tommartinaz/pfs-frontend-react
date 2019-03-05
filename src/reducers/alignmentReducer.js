import _ from 'lodash';
import { FETCH_ALIGNMENTS } from "../actions/types";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_ALIGNMENTS:
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}