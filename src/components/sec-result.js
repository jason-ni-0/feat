import React from 'react'

import PropTypes from 'prop-types'

import './sec-result.css'

const SecResult = (props) => {
  return (
    <div className="sec-result-container">
      <h2 className="sec-result-text">{props.heading}</h2>
      <h1 className="sec-result-text1">{props.heading1}</h1>
    </div>
  )
}

SecResult.defaultProps = {
  heading: 'Your FEAT is to eat at...',
  heading1: 'Forbidden City',
  rootClassName: '',
}

SecResult.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SecResult
