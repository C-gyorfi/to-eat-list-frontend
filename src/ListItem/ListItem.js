import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';
import { List, Avatar } from 'antd';

const ListItem = ({ name, expiryDate }) => (
  <div className={`list-item ${name}`}>
    <p>
      <div className="list-item-name">
        {name}
      </div>
      <div className="list-item-expiryDate">
        {expiryDate}
      </div>
    </p>
  </div>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
}

export default ListItem;
