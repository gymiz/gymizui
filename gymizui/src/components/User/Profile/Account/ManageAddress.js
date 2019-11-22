import React, { Component } from 'react';
import '../style.css'
import { Form, Button, Input } from 'semantic-ui-react'

const countries =[
    {  key: '091', text: 'India', value : 'India'   },
    {  key: '977', text: 'Nepal', value : 'Nepal'   },
]
const states = [
    {  key: '07', text: 'Delhi', value : 'Delhi'   },
    {  key: '10', text: 'Bihar', value : 'Bihar'   },
    {  key: '20', text: 'Jharkhand', value : 'Jharkhand'   },
    {  key: '29', text: 'Karnatka', value : 'Karnataka'   },
    {  key: '27', text: 'Maharastra', value : 'Maharastra'   },
    {  key: '33', text: 'TamilNadu', value : 'TamilNadu'   },
]
const cities =[
    {  key: '080', text: 'Bangalore', value : 'Bangalore'   },
    {  key: '033', text: 'Chennai', value : 'Chennai'   },
    {  key: '011', text: 'Delhi', value : 'Delhi'   },
    {  key: '0135', text: 'Mumbai', value : 'Mumbai'   },
    {  key: '0651', text: 'Ranchi', value : 'Ranchi'   },
]

class ManageAddress extends React.Component {
    
  render() {
    return (
        <div className="dashboard-list">
        <div className="dashboard-message contact-2 bdr clearfix">
        <div className=""><h5>Manage Address</h5>
        <div className="list-group-item">Malleshwara Nilaya, 2nd Cross Stree, Near Government School, Kundanahalli, Bangalore, Karnatka-56003 
        <button type="button" className="btn btn-dark deleteAddressButton"><i class="fa fa-trash" aria-hidden="true"></i>  Delete</button> 
        </div>
        <div className="list-group-item">Malleshwara Nilaya, 2nd Cross Stree, Near Government School, Kundanahalli, Bangalore, Karnatka-560037
        <button type="button" className="btn btn-dark deleteAddressButton"><i class="fa fa-trash" aria-hidden="true"></i>  Delete</button>
        </div>
        <div className="list-group-item">Malleshwara Nilaya, 2nd Cross Stree, Near Government School, Kundanahalli, Bangalore, Karnatka-560037
        <button type="button" className="btn btn-dark deleteAddressButton"><i class="fa fa-trash" aria-hidden="true"></i>  Delete</button>
        </div>
     </div>
<div className="row editProfile">
                <div className="col-lg-12 col-md-12">
                <Form>
                    <Form.Group widths='equal'>
                    <Form.Input fluid label='Street' placeholder='Street' />
                    <Form.Input fluid label='Address' placeholder='Address' />
                    <Form.Input fluid label='Area Code' placeholder='Area code' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                    <Form.Select
                            fluid
                            label='City/District'
                            options={cities}
                            placeholder='Current city'
                        />
                        <Form.Select
                            fluid
                            label='State'
                            options={states}
                            placeholder='State'
                        />
                        <Form.Select
                            fluid
                            label='Country'
                            options={countries}
                            placeholder='Country'
                        />
                    </Form.Group>
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
export default ManageAddress;