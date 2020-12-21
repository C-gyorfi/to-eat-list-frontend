import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';
import { Menu, Dropdown, Button, message } from 'antd';

function handleDelete(id) {
  message.info('Delete not yet implemented: ' + id);
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
