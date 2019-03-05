import pfs from '../apis/pfs';
import { FETCH_ALIGNMENTS } from './types';

export const fetchAlignments = () => async dispatch => {
    const response = await pfs.get('/alignments');
    dispatch({ type: FETCH_ALIGNMENTS, payload: response.data });
};