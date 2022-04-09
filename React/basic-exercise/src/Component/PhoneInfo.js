import React, { Component, Fragment } from 'react'
import '../App.css';

//this component is infos in the box
export default class PhoneInfo extends Component {

  state = {
    editing: false,
    name: '',   //this is new value from editing input
    phone: '',
  }
  
  handleRemove = () => {
    const {info, onRemove} = this.props;
    onRemove(info.id)
  }

  handleToggleEdit = () => {
    const {info, onUpdate} = this.props;
    //get prev input value(props.info) to show  -> editing is true -> 
    //  save edited value -> editing is false (meaning is clicked save button) -> onUpdate(from APP) with new input value
    if(this.state.editing) { // true -> false 
      onUpdate(info.id, {
        name: this.state.name,  //new datas that should update 
        phone: this.state.phone 
      })
    } else {
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }


    this.setState({
      editing: !this.state.editing
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
      const { editing } = this.state
      const { name, phone } = this.props.info;
      const style = {
          border: '2px solid gray',
          padding: '8px',
          margin: '10px 200px', 
      }
    return (
      
      <div style={style}>
        {editing ? (
          <Fragment>
            <div><input name='name' onChange={this.handleChange} value={this.state.name} /></div>
            <div><input name='phone' onChange={this.handleChange} value={this.state.phone} /></div>
          </Fragment>
        ): (
          <Fragment>
            <div><b>{name}</b></div>
            <div>{phone}</div>
          </Fragment>
          )}
        
        <button onClick={this.handleRemove}>DELETE</button>
        <button onClick={this.handleToggleEdit}>
        {editing ? 'SAVE' : 'EDIT'}
        </button>
      </div>
    )
  }
}
