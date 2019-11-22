import React, { Component } from 'react';
import { login } from '../../Utils/APICalls';
import { ACCESS_TOKEN } from '../../Constants'; 
import Logo  from '../../../logo.png';
import './style.css';
import 'antd/dist/antd.css';
import { NavLink, Link } from 'react-router-dom';

import { Form, Input, Button, Icon, notification, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
    render() {
        const AntWrappedLoginForm = Form.create()(LoginForm)
        return (
          <div class="contact-section overview-bgi">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="form-content-box">
                          <div class="details">
                              <NavLink  to='/'><img src={Logo} class="cm-logo" alt="Gymiz-logo" /></NavLink> 
                              <h3>Sign into your account</h3> 
                                <AntWrappedLoginForm onLogin={this.props.onLogin} />
                              <ul class="social-list clearfix">
                                <li><a href="#" class="facebook-bg"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#" class="twitter-bg"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#" class="google-bg"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#" class="linkedin-bg"><i class="fa fa-linkedin"></i></a></li>
                              </ul>
                              <div class="footer">
                                  <span>Don't have an account? <NavLink to='/signup'>Register here </NavLink></span>
                              </div>
                          </div>
                      </div>
                  
                  </div>
              </div>
          </div>
      </div> 

        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();   
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const loginRequest = Object.assign({}, values);
                login(loginRequest)
                .then(response => {
                    localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                    this.props.onLogin();
                }).catch(error => {
                    if(error.status === 401) {
                        notification.error({
                            message: 'Gymiz App',
                            description: 'Your Username or Password is incorrect. Please try again!'
                        });                    
                    } else {
                        notification.error({
                            message: 'Gymiz App',
                            description: error.message || 'Sorry! Something went wrong. Please try again!'
                        });                                            
                    }
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem >
                    {getFieldDecorator('usernameOrEmail', {
                        rules: [{ required: true, message: 'Please enter your username or email' }],
                    })(
                    <Input 
                        prefix={<Icon type="user" />}
                        size="large"
                        name="usernameOrEmail" 
                        placeholder="Username or Email" />    
                    )}
                </FormItem>
                <FormItem >
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please enter your password' }],
                })(
                    <Input 
                        prefix={<Icon type="lock" />}
                        size="large"
                        name="password" 
                        type="password" 
                        placeholder="Password"  />                        
                )}
                </FormItem>
                <NavLink to='/resetPassword' className="link-not-important pull-right">  Forgot password? </NavLink>
                <FormItem>
                   {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                    })(<Checkbox className="pull-left">Remember me</Checkbox>)}
                    <Button type="primary" htmlType="submit" size="large" className="btn-md button-theme btn-block" >Login</Button>
                </FormItem>
            </Form>
        );
    }
}


export default Login;