import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { MessageProviderWrapper } from './context/userMessage.context'
import { AuthProviderWrapper } from './context/auth.context'

ReactDOM.render(
  <Router>
    <AuthProviderWrapper>
      <MessageProviderWrapper>
        <App />
      </MessageProviderWrapper>
    </AuthProviderWrapper>
  </Router>,
  document.getElementById('root')

)
