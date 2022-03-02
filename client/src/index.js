import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'

import { MessageProviderWrapper } from './context/userMessage.context'



ReactDOM.render(
  <Router>
    <MessageProviderWrapper>
      <App />
    </MessageProviderWrapper>
  </Router>,
  document.getElementById('root')

)
