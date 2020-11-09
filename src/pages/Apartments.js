import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {ApartmentCard} from "../components/ApartmentCard";
import {fetchApartments, likeApartment} from "../redux/actions/apartment.actions";

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
    displayWidth >= 1200 && setColumnNumber(5)
    displayWidth >= 992 && displayWidth < 1200 && setColumnNumber(4)
    displayWidth >= 768 && displayWidth < 992 && setColumnNumber(3)
    displayWidth >= 576 && displayWidth < 768 && setColumnNumber(2)
    displayWidth < 576 && setColumnNumber(1)
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
