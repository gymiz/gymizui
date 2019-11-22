import React, { Component } from 'react';
import '../style.css'
import { Form, Button, Field } from 'semantic-ui-react'

class ResetPswd extends React.Component {
    
  render() {
    return (
        <div className="dashboard-list">
        <div className="dashboard-message contact-2 bdr clearfix">
        <div className="row">
                <div className="col-lg-12 col-md-12">
                   <h5>Change Password</h5> 
                <Form> 
                    <Form.Field width={10} >
                        <label >Current Password</label>
                    <input placeholder='Current Password' />
                    </Form.Field>
                    <Form.Field width={10}  >
                        <label >New Password</label>
                    <input placeholder='New Password' />
                    </Form.Field>
                    <Form.Field width={10} >
                        <label >Confirm Password</label>
                    <input placeholder='Confirm Password' />
                    </Form.Field>
                    <Button.Group>
                        <Button size='large'>Clear</Button>
                        <Button.Or />
                        <Button color='red' size='large'>Reset</Button>
                    </Button.Group>
                    </Form>
                </div>

            </div>
        </div>
</div>
    )
  }
}
export default ResetPswd;