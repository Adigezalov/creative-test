import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {ApartmentCard} from "../components/ApartmentCard";
import {fetchApartments, likeApartment} from "../redux/actions/apartment.actions";
import {displaySize} from "../helpers/displaySize";
import {DISPLAY_L, DISPLAY_M, DISPLAY_S, DISPLAY_XL, DISPLAY_XS} from "../constants/displaySize.constants";

const styles = {
  container: {
    display: 'grid',
    gridGap: 20,
    padding: 20,
  },
}

export const Apartments = () => {
  const dispatch = useDispatch();
  const [displayWidth, setDisplayWidth] = useState(0)
  const [columnNumber, setColumnNumber] = useState(0)
  const apartments = useSelector((state) => state.apartment.apartments);

  useEffect(() => {
    setDisplayWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setDisplayWidth(window.innerWidth)
    });
    dispatch(fetchApartments())
    return window.removeEventListener("resize", null)
  }, [])

  useEffect(() => {
    displaySize(displayWidth) === DISPLAY_XL && setColumnNumber(5)
    displaySize(displayWidth) === DISPLAY_L && setColumnNumber(4)
    displaySize(displayWidth) === DISPLAY_M && setColumnNumber(3)
    displaySize(displayWidth) === DISPLAY_S && setColumnNumber(2)
    displaySize(displayWidth) === DISPLAY_XS && setColumnNumber(1)
  }, [displayWidth])

  const likeApartmentHandler = (id) => {
    dispatch(likeApartment(id))
  }

  return (
      <div style={{...styles.container, gridTemplateColumns: `repeat(${columnNumber}, 1fr)`}}>
        {
          apartments.map(apartment => (
              <ApartmentCard key={apartment.id} apartment={apartment} likeApartmentHandler={likeApartmentHandler}/>
          ))
        }
      </div>
  );
};
