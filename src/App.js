
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import DevCvMakerForm from './pages/DevCvMakerForm'


class App extends Component {

  render() {
    return (
      <>
        <Header />
        <DevCvMakerForm />
        <Footer />
      </>
    )
  }
}


export default connect()(App)