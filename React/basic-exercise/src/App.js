import React, { Component } from 'react'
import './App.css';
import Counter from './Component/Counter';
import MyComponent from './Component/MyComponent';
import Myname from './Component/Myname';
import PhoneForm from './Component/PhoneForm';
import PhoneList from './Component/PhoneList';


export default class A extends Component {

  id = 0;  //id is not for rendering, so not need to put state

  state = {
    information: [],
  }
  
  handleCreate = (data) => {
    const { information } = this.state
    this.setState({
      information: information.concat({...data, id: this.id++})
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } =this.state;
    this.setState({
      information: information.map(info => {
        if(info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      })
    })
  }
    
  render() {
    return (
        <div className="App">
            <div>
            <Counter />
            <MyComponent value= {5}/>
            </div>
            <hr />
            <div>
            <PhoneForm onCreate={this.handleCreate} />
            <PhoneList data={this.state.information} onRemove={this.handleRemove} onUpdate={this.handleUpdate}/>
            </div>
            {/* <hr />
            <div>
            <h1>Functional Component * useState</h1>
            <Myname />
            </div> */}
      </div>
    )
  }
}
