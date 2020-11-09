import {FETCH_APARTMENTS, LIKE_APARTMENT} from "../types/apartment.types";
import data from '../../data/entities.json'

export function fetchApartments() {
  return {
    type: FETCH_APARTMENTS,
    payload: data
  }
}

export function likeApartment(id) {
  return {
    type: LIKE_APARTMENT,
    payload: id
  }
}
