
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'
import DevCvMakerForm from './pages/DevCvMakerForm'


class App extends Component {

  render() {
    return (
      <>
        <Header/>
        <DevCvMakerForm/>
      </>
    )
  }
}


export default connect()(App)