import React from 'react'

import { Helmet } from 'react-helmet'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import Start from '../components/start'
import Distance from '../components/distance'
import Type from '../components/type'
import Price from '../components/price'
import Loading from '../components/loading'

import './home.css'

const Home = (props) => {
  const page = useSelector(state => state.page);
  var toRender = <Start rootClassName="start-root-class-name"></Start>;
  switch(page) {
    case 'start':
      toRender = <Start rootClassName="start-root-class-name"></Start>;
      break;
    case 'distance':
      toRender = <Distance rootClassName="distance-root-class-name"></Distance>;
      break;
    case 'type':
      toRender = <Type rootClassName="type-root-class-name"></Type>;
      break;
    case 'price':
      toRender = <Price rootClassName="price-root-class-name"></Price>;
      break;
    case 'loading':
      toRender = <Loading rootClassName="loading-root-class-name"></Loading>;
      break;
    default:
      toRender = <Start rootClassName="start-root-class-name"></Start>;
  }
  return (
    <div>
      <Helmet>
        <title>Feat</title>
        <meta property="og:title" content="Home - Feat" />
      </Helmet>
      <nav class="navbar" id="main-nav">
        <div class="container-fluid">
        <Link className="navbar-brand" id="logo" to="/">FEAT</Link>
      </div>
      </nav>
      <div class="container-expand" style={{ backgroundImage: `url(./foodbg.jpeg)` }} id="about-bg">
      <div class="container-fluid bg-white align-items-center" id="content-hold">
        {toRender}
      </div>
    </div>
  </div>

  )
}

export default Home
