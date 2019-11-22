import React, { Component } from 'react';
import myDP from '../../../assets/images/mydp.jpg'
import './style.css'
import { Form, Button, Input } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]
class Profile extends React.Component {

  render() {
     
    return (
        <div className="dashboard-list">
        <div className="dashboard-message contact-2 bdr clearfix">
            <div className="row" >
            <div className="col-lg-3 col-md-3">
                    <div className="edit-profile-photo">
                        <img src={myDP} alt="profile-photo" className="img-fluid" />
                        <div className="change-photo-btn">
                            <div className="photoUpload">
                                <span><i className="fa fa-upload"></i></span>
                                <input type="file" className="upload" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-9">
                <div className="row" >
                <div className="col-lg-8 col-md-8" >
                    <h5 ><strong>Nishant Tiwary</strong></h5>
                    <h6>@Username</h6>
                    <br/>
                    <h6><strong>Email :</strong> nishant2740@gmail.com <span className="text-muted"> (Please Verify your email id.)</span> </h6>
                    <h6><strong>Mobile  :</strong> + 91 955 199 8783 (Please verify your mobile no.) </h6>
                    <h6><br /><strong>About:</strong></h6>
                    <p>This is about me section to be replaced with actual content.</p>
                  </div>
                  <div className="col-lg-4 col-md-4" >
                    <div class="text-center text-sm-right">
                        <span class="badge badge-secondary">Social</span>
                        <div class="text-muted"><small>Joined 09 Dec 2017</small></div>
                    </div>
                </div> 
                </div>
                </div>
            </div>
  
            <div className="row editProfile">
                <div className="col-lg-12 col-md-12">
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='First name' placeholder='First name' />
                        <Form.Input fluid label='Last name' placeholder='Last name' />
                        <Form.Select
                            fluid
                            label='Gender'
                            options={options}
                            placeholder='Gender'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Weight' placeholder='Enter weight...' />
                        <Form.Input fluid label='Height' placeholder='Enter Height...' />
                        <Form.Input fluid label='Date of Birth' placeholder='Date of Birth' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Mobile No' readOnly />
                        <Form.Input fluid label='Email ID' readOnly />  
                    </Form.Group>
                   
                    <Form.TextArea label='About' placeholder='Tell us more about you...' />
                    <Button.Group>
                        <Button size='large'>Cancel</Button>
                        <Button.Or />
                        <Button color='red' size='large'>Save</Button>
                    </Button.Group>
                </Form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
    
export default Profile;