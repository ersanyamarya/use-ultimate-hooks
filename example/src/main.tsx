import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContextContainer } from './contextOfApp'
import Left from './left'
import Right from './right'

const App = () => {
  return (
    <div className="container">
      <div className="left section">
        <Left />
      </div>
      <div className="right section">
        <Right />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextContainer>
      <App />
    </AppContextContainer>
    ,
  </React.StrictMode>
)
