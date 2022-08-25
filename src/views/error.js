import React from 'react'
import { Helmet } from 'react-helmet'

import './error.css'

const Error = (props) => {
  return (
    <div>
      <Helmet>
        <title>Feat</title>
        <meta property="og:title" content="Home - Feat" />
      </Helmet>
      <nav class="navbar" id="main-nav">
        <div class="container-fluid">
        <a class="navbar-brand" id="logo" href="/#/feat">FEAT</a>
      </div>
      </nav>
      <div class="container-expand" id="about-bg">
      <div class="container-fluid bg-white align-items-center" id="content-hold">
      <p>&nbsp;</p>
      <div class="display-2 pb-3 mb-3 border-bottom">You walked down the wrong path of Feat. Go back on the right path.</div>
      <p>&nbsp;</p>
      </div>
    </div>
  </div>
  )
}

export default Error
