import { reduxAction } from "../constant/reduxAction";

const movieAction = {
    fetchDataMovie: () => ({
        type: reduxAction.FETCH_DATA_MOVIE
    }),
    fetchDataSuccess: (data) => ({
        type: reduxAction.FETCH_DATA_SUCCESS,
        payload: data
    }),
    fetchDataFalure: (error) => ({
        type: reduxAction.FETCH_DATA_FALURE,
        payload: error
    })
}
export default movieAction;