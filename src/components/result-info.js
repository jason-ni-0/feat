import React from 'react'

import PropTypes from 'prop-types'

import './result-info.css'

const ResultInfo = (props) => {
  //console.log(props);
  return (
    <div className={`result-info-container ${props.rootClassName} `}>
      <span className="result-info-text">{props.text + ' ' + props.result.location.address1 + ' ' + props.result.location.city + ', ' + props.result.location.state + ' ' + props.result.location.zip_code}</span>
      <span className="result-info-text1">{props.text1 + ' ' + props.result.phone}</span>
      <span className="result-info-text2">{props.text11 + ' ' + props.result.rating}</span>
      <span className="result-info-text3">{props.text111 + ' ' + props.result.review_count}</span>
      <span className="result-info-text4"><a target="_blank" href={props.result.url}>Go to Yelp page</a></span>
    </div>
  )
}

ResultInfo.defaultProps = {
  rootClassName: '',
  text1: 'Phone:',
  text11: 'Rating:',
  text111: 'Reviews:',
  text: 'Address:',
  text1111: 'Price:',
}

ResultInfo.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
  text111: PropTypes.string,
  text: PropTypes.string,
  text1111: PropTypes.string,
}

export default ResultInfo
