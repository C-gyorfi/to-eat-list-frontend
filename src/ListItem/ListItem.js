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
        //Fixme: reloading the window is not ideal
        window.location.reload();
      },
      (error) => {
        message.warn("Something went wrong: " + error.message + " , try again...");
      }
    )
  );
}

const ListItem = ({id, name, expiryDate }) => (
  <div className={`list-item ${name}`}>
    <p>
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
    </p>
  </div>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
}

export default ListItem;
