import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';
import { Menu, Dropdown, Button, message } from 'antd';

function handleDelete(id) {
  const apiurl = process.env.REACT_APP_TEL_API_URL;
  const endpoint = `api/food_item/${id}/`;
  fetch(apiurl + endpoint, { method: 'DELETE' })
    .then(response => response.json()
    .then(
      (result) => {
        message.info(result.message);
      },
      (error) => {
        message.error("Something went wrong: " + error.message + " , try again...");
      }
    )
  );
}

function getStateEmoji(expiryDateString){
  const expiryDate = new Date(expiryDateString).setHours(0,0,0,0);
  const now = new Date().setHours(0,0,0,0);
  if (expiryDate === now) return "❗";
  return expiryDate < now ? "😢" : "✅"; 
}

const ListItem = ({id, name, expiryDate }) => (
  <div className={`list-item ${name}`}>
    <div className="list-item-state">
      { getStateEmoji(expiryDate) }
    </div>
    <div className="list-item-name">
      {name}
    </div>
    <div className="list-item-expiryDate">
      {expiryDate}
    </div>
    <div className="list-item-menu">
      <Dropdown.Button overlay={(<Menu onClick={(e) => handleDelete(id)}>
        <Button type="primary" danger>
          Delete
        </Button>
      </Menu>)}/>
    </div>
  </div>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
}

export default ListItem;
