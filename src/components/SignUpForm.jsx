import React from "react";
import auth from "../modules/auth";
import { connect } from "react-redux";
import { AUTHENTICATE } from "../state/actions/actionTypes";
import { Form, Button } from "semantic-ui-react";

const SignUpForm = (props) => {
  const onSignup = async (e) => {
    e.preventDefault();

    try {
      let response = await auth.signUp({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
        password_confirmation: e.target.elements.passwordconfirmation.value,
      });
      props.dispatch({
        type: AUTHENTICATE,
        payload: {
          currentUser: {
            email: response.data.data.email,
            role: response.data.data.role,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  let signup;
  if (props.authenticated) {
    let cutEmail = props.currentUser.email.substring(
      0,
      props.currentUser.email.indexOf("@")
    );
    signup = (
      <>
        <p id="signed-up-message" class="success-message">
          Hi, {cutEmail}!
        </p>
      </>
    );
  } else {
    signup = (
      <Form
        z-index="20000"
        class="ui form"
        id="sign-up-form"
        onSubmit={onSignup}
      >
        <Form.Field>
          <label>Email</label>
          <input id="email" name="email" type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input
            id="passwordconfirmation"
            name="passwordconfirmation"
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Field>
        <Button
          id="sign-up-button"
          class="ui blue inverted button"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
    );
  }

  return <div>{signup}</div>;
};
const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(SignUpForm);
