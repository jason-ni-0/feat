import React from 'react'

import PropTypes from 'prop-types'


const ResultInfo = (props) => {
  //console.log(props);
  return (
    <div class="container-fluid col">
      <p class="lead">{props.text + ' ' + props.result.location.address1 + ' ' + props.result.location.city + ', ' + props.result.location.state + ' ' + props.result.location.zip_code}</p>
      <p class="lead">{props.text1 + ' ' + props.result.phone}</p>
      <p class="lead">{props.text11 + ' ' + props.result.rating}</p>
      <p class="lead">{props.text111 + ' ' + props.result.review_count}</p>
      <p class="lead"><a target="_blank" href={props.result.url}>Go to Yelp page</a></p>
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
