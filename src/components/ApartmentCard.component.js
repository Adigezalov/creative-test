import React from 'react';
import {LikeComponent} from "./Like.component";

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

export const ApartmentCardComponent = ({apartment, likeApartmentHandler}) => {
  const {id, title, like} = apartment
  return (
      <div style={styles.card}>
        {title}
        <div style={styles.like} onClick={() => {
          likeApartmentHandler(id)}}>
          <LikeComponent active={like}/>
        </div>
      </div>
  );
};
