import './style.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './store'
import { App } from './App'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: 'React'
//     }
//   }

//   render() {
//     return (
//       <div>
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//       </div>
//     )
//   }
// }

render((
  <Provider store={store}>
    <App />
  </Provider>
),
document.querySelector('#app'))
