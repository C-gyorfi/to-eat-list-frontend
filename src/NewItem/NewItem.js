import React from 'react';
import './NewItem.css';
import { Input, DatePicker, Button, message } from 'antd';

class NewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: "",
      expiryDate: ""
   }
  }

  addItem = () => {
    const apiurl = process.env.REACT_APP_TEL_API_URL;
    const endpoint = "api/1/food_item/";
    const newItemName = this.state.newItem;
    const expiryDate = document.getElementById('new-expiry-date').value;
    if (!newItemName || !expiryDate) return message.warn('Enter food item details');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"name": newItemName, "expiry_date": expiryDate})
    };
    fetch(apiurl + endpoint, requestOptions)
      .then(response => response.json()
      .then(
        (result) => {
          message.success("New item added: " + result.name);
          this.setState({
            newItem: "",
            expiryDate: ""
          });
        },
        (error) => {
          message.error("Something went wrong: " + error.message + " , try again...");
        }
      )
    );
  }

  onInputchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render = () => {
    return (
      <div className={`new-item-container`}>
        <Input.Group size="large">
          <Input name='newItem' id='new-item-field' style={{ width: '45%' }} value={this.state.newItem} onChange={this.onInputchange} />
          <DatePicker id='new-expiry-date' size="large" style={{ width: '35%' }} />
          <Button onClick={this.addItem} type="primary" size="large" style={{ width: '20%' }}>
            Add
          </Button>
        </Input.Group>
    </div>
    );
  }
}

export default NewItem;
