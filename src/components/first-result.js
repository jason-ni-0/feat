import React from 'react'

import PropTypes from 'prop-types'

import './first-result.css'

const FirstResult = (props) => {
  //console.log(props);
  return (
    <div className={`first-result-container ${props.rootClassName} `}>
      <h2 className="first-result-text">{props.heading}</h2>
      <h1 className="first-result-text1">{props.result.name}</h1>
    </div>
  )
}

FirstResult.defaultProps = {
  heading: 'Your FEAT is at...',
  heading1: 'Restaurant',
  rootClassName: '',
}

FirstResult.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FirstResult
