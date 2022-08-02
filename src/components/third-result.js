import React from 'react'

import PropTypes from 'prop-types'

import './third-result.css'

const ThirdResult = (props) => {
  return (
    <div className="third-result-container">
      <h2 className="third-result-text">{props.heading}</h2>
      <h1 className="third-result-text1">{props.heading1}</h1>
    </div>
  )
}

ThirdResult.defaultProps = {
  rootClassName: '',
  heading: 'Your FEAT is to eat at...',
  heading1: 'Forbidden City',
}

ThirdResult.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
}

export default ThirdResult
