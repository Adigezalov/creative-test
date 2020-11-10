import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {ApartmentCardComponent} from "../components/ApartmentCard.component";
import {fetchApartments, likeApartment} from "../redux/actions/apartment.actions";
import {displaySizeHelper} from "../helpers/displaySize.helper";
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
    resizeDisplayHandler()
    window.addEventListener("resize", () => resizeDisplayHandler());
    dispatch(fetchApartments())
    return window.removeEventListener("resize", () => resizeDisplayHandler())
  }, [])

  const resizeDisplayHandler = () => {
    setDisplayWidth(window.innerWidth)
  }

  useEffect(() => {
    displaySizeHelper(displayWidth) === DISPLAY_XL && setColumnNumber(5)
    displaySizeHelper(displayWidth) === DISPLAY_L && setColumnNumber(4)
    displaySizeHelper(displayWidth) === DISPLAY_M && setColumnNumber(3)
    displaySizeHelper(displayWidth) === DISPLAY_S && setColumnNumber(2)
    displaySizeHelper(displayWidth) === DISPLAY_XS && setColumnNumber(1)
  }, [displayWidth])

  const likeApartmentHandler = (id) => {
    dispatch(likeApartment(id))
  }

  return (
      <div style={{...styles.container, gridTemplateColumns: `repeat(${columnNumber}, 1fr)`}}>
        {
          apartments.map(apartment => (
              <ApartmentCardComponent key={apartment.id} apartment={apartment} likeApartmentHandler={likeApartmentHandler}/>
          ))
        }
      </div>
  );
};
