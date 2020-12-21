import React from 'react';
import './NewItem.css';
import { Input, DatePicker, Button, message } from 'antd';

function addItem() {
  var new_item_name = document.getElementById('new-item-field').value;
  var expery_date = document.getElementById('new-expiry-date').value;
  message.info("Added: " + new_item_name + ", expiry date: " + expery_date);
}

const NewItem = () => (
  <div className={`new-item-container`}>
    <Input.Group size="large">
      <Input id='new-item-field' style={{ width: '50%' }} defaultValue="" />
      <DatePicker id='new-expiry-date' size="large" style={{ width: '45%' }} />
      <Button onClick={addItem} type="primary" size="large" style={{ width: '5%' }}>
          Add
      </Button>
    </Input.Group>
  </div>
);

export default NewItem;
