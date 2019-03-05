import pfs from '../apis/pfs';
import { FETCH_CLASSES } from './types';

export const fetchClasses = () => async dispatch => {
    const response = await pfs.get('/classes');
    dispatch({ type: FETCH_CLASSES, payload: response.data });
}