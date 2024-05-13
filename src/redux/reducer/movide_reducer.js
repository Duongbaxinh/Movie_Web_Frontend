import { reduxAction } from "../../constant/reduxAction";

export const initState = {
    movieData: [],
    isLoading: false,
    error: null
}
const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case reduxAction.FETCH_DATA_MOVIE:
            return { ...state, isLoading: true, error: null }
        case reduxAction.FETCH_DATA_SUCCESS:
            return { ...state, isLoading: false, movieData: action.payload }
        case reduxAction.FETCH_DATA_MOVIE:
            return { ...state, isLoading: false, error: action.payload }
        default:
            return state;
    }
}
export default movieReducer;