import React, { Component } from 'react';
import { signup } from "../services/api";

class SignUpForm extends Component {
    state = {
        name: "",
        password: "",
        passwordConfirm: "",
        email: ""
    };

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.password === this.state.passwordConfirm) {
            signup(this.state.name, this.state.email, this.state.password)
            .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                this.props.signin(data);
                this.props.history.push('/')
            }
            });
        } else {
            alert( "Your passwords do not match" )
        }
    };
    
    updateState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { name, email, password, passwordConfirm } = this.state;
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <label>
                    Email Adress:
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <label>
                    Password:
                    <input
                        type="text"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <label>
                    Confirm Password:
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={this.updateState}
                    />
                    </label>
                    <br />
                    <button variant="contained" value="Submit">
                    {" "}
                    Sign Up{" "}
                    </button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;