import React, { Component } from 'react'

export default class A extends Component {
  render() {
    return (
        <div className="App">
            <div>
            <Counter />
            <MyComponent value= {5}/>
            </div>
            <hr />
            <div>
            <PhoneForm onCreate={handleCreate}/>
            {JSON.stringify(info)}
            </div>
            <hr />
            <div>
            <h1>Functional Component * useState</h1>
            <Myname />
            </div>
      </div>
    )
  }
}
