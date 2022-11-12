import React from 'react'
import GithubSingInAuth from '../pages/GithubSingInAuth'
import SingInPage from '../pages/SingInPage'
import './../styles/App.css'


const App = () => {
  return (
    <div>
      <SingInPage/>
      <GithubSingInAuth/>
    </div>
  )
}

export default App