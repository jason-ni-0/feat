import React from 'react'

import PropTypes from 'prop-types'

import './loading.css'

const Loading = (props) => {
  return (
    <div className="loading-container">
      <h1 className="loading-text">{props.heading}</h1>
    </div>
  )
}

Loading.defaultProps = {
  heading: 'Divining results...',
}

Loading.propTypes = {
  heading: PropTypes.string,
}

export default Loading
