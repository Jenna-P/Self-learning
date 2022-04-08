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

    handleSubmit = (e) => { //prevent page reloading
        e.preventDefault(); 
        this.props.onCreate(this.state);
        this.setState({
            name:'',
            phone:'',
           
        });

    }
  render() {
    return (
      <div>
        <h1>Phone Form</h1>
        <form onSubmit={this.handleSubmit}>
            <input name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
            <input name="phone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.phone} />
            <button type="submit">Submit</button>
            

        </form>
      </div>
    )
  }
}
