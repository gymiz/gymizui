import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import Logo  from '../../../logo.png'; 
import './style.css';
import { FormErrors } from '../FormErrors';
import { resetPswd, checkEmailAvailability } from '../../Utils/APICalls';
import { 
    EMAIL_MAX_LENGTH,
    PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
} from '../../Constants';
import { notification } from 'antd';


class ResetPswd extends Component {
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          confirmPassword:'',
          formErrors: {email: '', password: '', confirmPassword:''},
          emailValid: false,
          passwordValid: false,
          confirmPasswordValid:false,
          formValid: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.validateField = this.validateField.bind(this);
      }
    
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
    
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;
        let pass = this.state.pass;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            pass=value;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          case 'confirmPassword':
                confirmPasswordValid = value.length >= 6;
                fieldValidationErrors.password = confirmPasswordValid ? '': ' is too short';
                if(value.match(pass)){
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '': ' is not the same';
                }
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        confirmPasswordValid:confirmPasswordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }    

    handleSubmit(event) {
        console.log('Handling submit now');
        event.preventDefault();
        const resetPswdRequest = {       
            email: this.state.email,
            password: this.state.password
        };
        resetPswd(resetPswdRequest)
        .then(response => {
            notification.success({
                message: 'Gymiz App',
                description: "Your Password is successfully Changed. Please Login to continue!",
            });          
            this.props.history.push("/login");
        }).catch(error => {
            notification.error({
                message: 'Gymiz App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
    }

  render() {
    return (
        <div class="contact-section overview-bgi">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-content-box">
                        <div class="details">
                            <NavLink  to='/'><img src={Logo} className="cm-logo" alt="Gymiz-logo" /> </NavLink>                     
                            <h3>Reset Your Password</h3>         
                            <form onSubmit={this.handleSubmit} >
                            <div className="panel panel-default">
                                <FormErrors formErrors={this.state.formErrors} />
                            </div>
                                <div class={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                    <input 
                                        type="email" required 
                                        name="email" 
                                        className="input-text" 
                                        placeholder="Username or Email Address" 
                                        value={this.state.email} 
                                        onChange={this.handleUserInput}/>
                                </div>
                                <div class={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                
                                    <input 
                                        type="password" 
                                        name="password" 
                                        className="input-text" 
                                        placeholder="New Password"
                                        value={this.state.password}
                                        onChange={this.handleUserInput} /> 

                                </div>
                               
                                <div class={`form-group ${this.errorClass(this.state.formErrors.confirmPassword)}`}>
                                    <input 
                                        type="password" 
                                        name="confirmPassword" 
                                        className="input-text" 
                                        placeholder="Re-enter Password" 
                                        value={this.state.confirmPassword}
                                        onChange={this.handleUserInput} />
                                </div>
                                
                                <div class="form-group mb-0">
                                    <button 
                                        type="submit" 
                                        className="btn-md button-theme btn-block"
                                        disabled={!this.state.formValid} >Reset
                                    </button>
                                </div>
                            </form>            
  
                            <div class="footer">
                                <span>Remember Password? <NavLink to='/login'>Login </NavLink></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    </div>
    );
  }

  validateEmail = (email) => {
    if(!email) {
        return {
            validateStatus: 'error',
            errorMsg: 'Email may not be empty'                
        }
    }

    const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
    if(!EMAIL_REGEX.test(email)) {
        return {
            validateStatus: 'error',
            errorMsg: 'Email not valid'
        }
    }

    if(email.length > EMAIL_MAX_LENGTH) {
        return {
            validateStatus: 'error',
            errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
        }
    }

    return {
        validateStatus: null,
        errorMsg: null
    }
}

  validatePassword = (password2) => {
    if(password2.length < PASSWORD_MIN_LENGTH) {
        return (
            <div>
                <label className="error">`Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`</label>
            </div>
        )
    } else if (password2.length > PASSWORD_MAX_LENGTH) {
        return {
            validationStatus: 'error',
            errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`
        }
    } else {
        return {
            validateStatus: 'success',
            errorMsg: null,
        };            
    }
}
}

export default ResetPswd;
