import React from 'react'
import { connect } from 'react-redux';
import { addView } from '../redux/index'

function Views({ count, addView}) {
  return (
    <div className="item">
      <h3>Views: {count}  </h3>
      <button onClick={()=>  addView()}>Add View</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        count: state.views.count
    }
}

// const mapDispatchToProps = (dispatch) => {   //pass function
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

const mapDispatchToProps = {   //pass object
    // addSubscriber: addSubscriber   -> es6 프로퍼티와 밸류 값이 같으면 하나만 써도 됨
    addView
}

export default connect(mapStateToProps, mapDispatchToProps)(Views)
