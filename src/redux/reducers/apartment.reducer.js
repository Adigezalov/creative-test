import {FETCH_APARTMENTS, LIKE_APARTMENT} from "../types/apartment.types";

const defaultState = {
  apartments: []
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_APARTMENTS:
      return {...state, apartments: action.payload}
    case LIKE_APARTMENT:
      state.apartments.map(apartment => {
        if (apartment.id === action.payload) {
          apartment.like=!apartment.like
        }
      })
      return {...state, apartments: state.apartments.slice()}
    default:
      return state
  }
}
