import React, { Fragment } from 'react'
import Header from '../components/home/Header';
import About from '../components/home/About';
import Rooms from '../components/home/Rooms'
const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Rooms />
    </Fragment>
  )
}

export default Home