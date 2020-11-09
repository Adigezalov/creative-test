import React from 'react';
import {Like} from "./Like";

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    border: '1px solid black',
    boxSizing: 'border-box'
  },
  like: {
    position: 'absolute',
    bottom: 20,
    right: 20
  }
}

export const ApartmentCard = ({apartment, likeApartmentHandler}) => {
  const {id, title, like} = apartment
  return (
      <div style={styles.card}>
        {title}
        <div style={styles.like} onClick={() => {
          likeApartmentHandler(id)}}>
          <Like active={like}/>
        </div>
      </div>
  );
};
