import React from 'react'
import { connect } from 'react-redux';
import { addSubscriber } from '../redux/index'

function Subscribers({ count, addSubscriber}) {
  return (
    <div className="item">
      <h3>Subscribers: {count}  </h3>
      <button onClick={()=> addSubscriber()}>Subscribe</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        count: state.subscribers.count
    }
}

// const mapDispatchToProps = (dispatch) => {   //pass function
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

const mapDispatchToProps = {   //pass object
    // addSubscriber: addSubscriber   -> es6 프로퍼티와 밸류 값이 같으면 하나만 써도 됨
    addSubscriber
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)
