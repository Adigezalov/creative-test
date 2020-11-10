import React from "react";
import {HeaderComponent} from "../components/Header.component";
import {FooterComponent} from "../components/Footer.component";
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
      <HeaderComponent/>
      <div style={styles.content}>
        <main style={{...styles.main}}>
          <Apartments/>
        </main>
      </div>
      <FooterComponent/>
    </div>
)
