/* eslint-disable default-case */
import React, { Component } from 'react'
import FromUserDetails from './FromUserDetails';
import FromPersonalDetails from './FromPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        state:'',
        city:'',
        bio:''
    }

    // To next step -----------------
    nextStep = () => {
      const { step } = this.state;
      this.setState({
          step: step + 1
      });
    }

     // Go back to prev step -----------------
    prevStep = () => {
      const { step } = this.state;
      this.setState({
          step: step - 1
      });
    }

    // Handle fields change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, state, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, state, city, bio }
    
    switch(step) {
      case 1:
        return (
          <FromUserDetails
            nextStep = { this.nextStep }
            handleChange={this.handleChange}
            values={values}
          />
        )
        case 2:
          return (
            <FromPersonalDetails
              nextStep = { this.nextStep }
              prevStep = { this.prevStep }
              handleChange={this.handleChange}
              values={values}
            />
          )
        case 3:
          return (
            <Confirm
              nextStep = { this.nextStep }
              prevStep = { this.prevStep }
              values={values}
            />
          )
        case 4:
          return (
            <Success
              nextStep = { this.nextStep }
              values={values}
            />
          )
    }

  }
}

export default UserForm