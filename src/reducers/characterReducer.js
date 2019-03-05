import _ from 'lodash';
import { 
    FETCH_CHARACTERS,
    FETCH_CHARACTER,
    EDIT_CHARACTER,
    CREATE_CHARACTER,
    DELETE_CHARACTER
} from "../actions/types";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_CHARACTER:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_CHARACTER:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_CHARACTER:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_CHARACTER:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}