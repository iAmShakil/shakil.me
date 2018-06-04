import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render () {
        return (
            <div>
            <form onSubmit={this.props.handleSubmit}>
                    <label htmlFor="Name">Name</label>
                    <input onChange={this.props.handleChange} type="text" name="name" placeholder="Name" value={this.props.data.name}/>
                    <label htmlFor="Email">Email</label>
                    <input onChange={this.props.handleChange} type="email" placeholder="Email" name="email"/>
                    <label htmlFor="Message">Message</label>
                    <textarea onChange={this.props.handleChange} name="message" placeholder="Your message..." cols="30" rows="7"></textarea>
                    <input className="button" type="submit" value="SUBMIT"/>
                </form>                
            </div>
        )
    }
}

export default Form;