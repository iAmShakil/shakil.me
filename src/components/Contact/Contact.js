import React, { Component } from 'react';
import Form from './Form/Form';
import axios from 'axios';
import './Contact.css';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentWillMount() {
        document.title = 'Contact - Shakil Ahmed';
      }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.checked? event.target.checked : event.target.value;
        if(name === "name"){
            this.setState({
                name : value
            })
        } else if(name === "email") {

            this.setState({
                email : value
            })
        } else if(name === "message") {

            this.setState({
                message : value
            })            
        }

    }

    handleSubmit = (event) => {

        event.preventDefault();
        // creating a new form data to send
        axios({
            method : 'post',
            url: '/',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: `form-name=contact&name=${encodeURIComponent(this.state.name)}&email=${encodeURIComponent(this.state.email)}&message=${encodeURIComponent(this.state.message)}`,
        })
        .then( () => {
            alert("Message successfully sent!");
            this.setState({
                name: '',
                email: '',
                message: '',
            });
        } )

        .catch( (err) => {
            alert("Error");
        } );

    }

    render () {
        return (
            <div className="Contact">
                <p>Send me an email at <span className="Keyword">hi@shakil.me</span> or use the form below.</p>
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state} />
            </div>
        )
    }
}

export default Contact;