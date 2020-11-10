import React from 'react';

const styles = {
  display: 'flex',
  flex: '0 0 auto',
  alignItems: 'center',
  padding: 20,
  borderBottomWidth: 1,
  borderBottomColor: '#e2e2e2',
  borderBottomStyle: 'solid'
}

export const HeaderComponent = () => {
  return (
      <header style={styles}>
        здесь header
      </header>
  );
};
