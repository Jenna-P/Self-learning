import React from 'react'
import { connect } from 'react-redux'

function Display(props) {
  return (
    <div className="item">
      <p>Subscribers : {props.count}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        count: state.subscribers.count
    }
}

export default connect(mapStateToProps)(Display)
