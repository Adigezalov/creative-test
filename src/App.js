import React from 'react'
import {Provider} from 'react-redux'
import {store} from './redux/stores/store'
import {Layout} from "./layouts/Layout";

export const App = ()  => {
  return (
      <Provider store={store}>
        <Layout/>
      </Provider>
  )
}

export default App
