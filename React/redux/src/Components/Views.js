import React,{ useState } from 'react'
import { connect } from 'react-redux';
import { addView } from '../redux/index'

function Views({ count, addView}) {

  const [number, setNumber] = useState(1);
  return (
    <div className="item">
      <h3>Views: {count}  </h3>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={()=>  addView(number)}>Add View</button>
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
    addView: (number) => addView(number)
}

export default connect(mapStateToProps, mapDispatchToProps)(Views)
