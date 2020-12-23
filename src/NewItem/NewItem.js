import React from 'react';
import './NewItem.css';
import { Input, DatePicker, Button, message } from 'antd';

function addItem() {
  const apiurl = process.env.REACT_APP_TEL_API_URL;
  const endpoint = "api/1/food_item/";
  const newItemName = document.getElementById('new-item-field').value;
  const expiryDate = document.getElementById('new-expiry-date').value;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"name": newItemName, "expiry_date": expiryDate})
  };
  fetch(apiurl + endpoint, requestOptions)
    .then(response => response.json()
    .then(
      (result) => {
        message.info("New item added: " + result.name);
        //Fixme: reloading the window is not ideal
        window.location.reload();
      },
      (error) => {
        message.warn("Something went wrong: " + error.message + " , try again...");
      }
    )
  );
}

const NewItem = () => (
  <div className={`new-item-container`}>
    <Input.Group size="large">
      <Input id='new-item-field' style={{ width: '45%' }} defaultValue="" />
      <DatePicker id='new-expiry-date' size="large" style={{ width: '35%' }} />
      <Button onClick={addItem} type="primary" size="large" style={{ width: '20%' }}>
          Add
      </Button>
    </Input.Group>
  </div>
);

export default NewItem;
