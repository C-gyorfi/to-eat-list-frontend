import './FoodList.css';
import ListItem from '../ListItem/ListItem';
import PropTypes from 'prop-types';
import { List } from 'antd';


const FoodList = ({ items }) => {
  const listItems = items.map(item => (
    <ListItem
      name={item.name}
      expiryDate={item.expiryDate}
    />)
  );
  return(
    <List className="food-list-container"
      size="large"
      header={<div>Add new items</div>}
      footer={<div>Add new items</div>}
      bordered
      itemLayout="horizontal"
      dataSource={listItems}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={'✅'}
            description={item}
          />
        </List.Item>
      )}
    />
  )
}

FoodList.propTypes = { 
  items: PropTypes.array.isRequired,
};

export default FoodList;
