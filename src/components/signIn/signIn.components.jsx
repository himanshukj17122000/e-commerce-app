import React, { Component } from "react";

import "../signIn/signIn.styles.scss";
import CustomButton from "../custom-button/custom-button.components";
import FormInput from "../form-input/form-input.components";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onClick={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            onChange={this.handleChange}
            label='email'
            value={this.state.email}
            required
          />

          <FormInput
            name='password'
            type='password'
            onChange={this.handleChange}
            label='password'
            value={this.state.password}
            required
          />
          <CustomButton type='submit'>Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
