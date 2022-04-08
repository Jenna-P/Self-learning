import React, { Component } from 'react'

export default class PhoneForm extends Component {

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        });
    }
  render() {
    return (
      <div>
        <h1>Phone Form</h1>
        <form>
            <input name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
            <input name="phone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.phone} />

            <div>
            {this.state.name} <br />
            {this.state.phone}
            </div>
        </form>
      </div>
    )
  }
}
