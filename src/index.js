import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ConnectedApp from './components/App'
import reducers from './reducers'
import middleWare from './middleware'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(reducers, middleWare)

ReactDOM.render(
  <Provider store={store}>
      <ConnectedApp/>
  </Provider>,
  document.getElementById('root')
);
