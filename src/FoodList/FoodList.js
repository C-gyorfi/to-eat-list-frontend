import './FoodList.css';
import ListItem from '../ListItem/ListItem';
import PropTypes from 'prop-types';


const FoodList = ({ items }) => {
  const listItems = items.map(item => (
    <ListItem
      name={item.name}
      expiryDate={item.expiryDate}
    />)
  );
  return(
    <div className="food-list-container">
      {listItems}
    </div>
  )
}

FoodList.propTypes = { 
  items: PropTypes.array.isRequired,
};

export default FoodList;
