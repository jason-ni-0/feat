import React from 'react'

import PropTypes from 'prop-types'

import './first-result.css'

const FirstResult = (props) => {
  //console.log(props);
  return (
    <div class="container-fluid col d-grid gap-3">
      <p>&nbsp;</p>
      <p class="lead">{props.heading}</p>
      <div class="display-1 pb-3 mb-3">{props.result.name}</div>
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
