import React, { useState } from 'react';
import './NewItem.css';
import { Input, DatePicker, Button, message } from 'antd';

const NewItem = (props) => {
  const [newItemName, setnewItemName] = useState('');

  const addItem = () => {
    const apiurl = process.env.REACT_APP_TEL_API_URL;
    const endpoint = "api/1/food_item/";
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
          setnewItemName('');
          props.renderFoodList();
        },
        (error) => {
          message.error("Something went wrong: " + error.message + " , try again...");
        }
      )
    );
  }

  const onInputchange = (event) => {
    setnewItemName(event.target.value)
  }

  return (
    <div className={`new-item-container`}>
      <Input.Group size="large">
        <Input name='newItem' id='new-item-field' style={{ width: '45%' }} value={newItemName} onChange={onInputchange} />
        <DatePicker id='new-expiry-date' size="large" style={{ width: '35%' }} />
        <Button onClick={addItem} type="primary" size="large" style={{ width: '20%' }}>
          Add
        </Button>
      </Input.Group>
    </div>
  );
};

export default NewItem;
