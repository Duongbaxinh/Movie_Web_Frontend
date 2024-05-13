import { combineReducers } from 'redux'
import movieReducer from './movide_reducer'

const rootReducer = combineReducers(
    {
        movie: movieReducer
    }
)
export default rootReducer