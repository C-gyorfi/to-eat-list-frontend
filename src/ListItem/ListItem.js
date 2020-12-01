import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name, expiryDate }) => (
  <div className={`list-item ${name}`}>
    <p className="name">
      {name}
    </p>
    <p className="expiryDate">
      {expiryDate}
    </p>
  </div>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
}

export default ListItem;
