import React from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Apartments} from "../pages/Apartments";

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  content: {
    flex: '1 0 auto'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }
}

export const Layout = () => (
    <div style={styles.wrapper}>
      <Header/>
      <div style={styles.content}>
        <main style={{...styles.main}}>
          <Apartments/>
        </main>
      </div>
      <Footer/>
    </div>
)
