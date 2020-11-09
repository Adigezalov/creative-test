import {combineReducers} from 'redux'
import apartmentReducer from './apartment.reducer'

export const rootReducer = combineReducers({
  apartment: apartmentReducer,
})
