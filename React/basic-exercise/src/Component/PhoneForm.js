import React, { Component } from 'react'

export default class PhoneForm extends Component {

    state = {
        name: '',
        phone: '',
        
    }

   input = null;  
    // or input = React.createRef;

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => { 
        e.preventDefault(); //prevent page reloading
        this.props.onCreate(this.state);
        this.setState({
            name:'',
            phone:'',
           
        });
        this.input.focus();
    }
  render() {
    return (
      <div>
        <h1>Phone Form</h1>
        <form onSubmit={this.handleSubmit}>
            <input name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} ref={ref => this.input = ref}/>
            {/* or ref={this.input}  */}
            <input name="phone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.phone} />
            <button type="submit">Submit</button>
            

        </form>
      </div>
    )
  }
}
