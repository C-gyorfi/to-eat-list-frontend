import './FoodList.css';
import React, { useEffect, useState } from "react";
import ListItem from '../ListItem/ListItem';
import { List } from 'antd';

const FoodList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const apiurl = process.env.REACT_APP_TEL_API_URL;
    const endpoint = "api/1/food_items/";

    fetch(apiurl + endpoint)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    var listItems = {}
    if (items.food_items) {
      listItems = items.food_items.map(item => (
        <ListItem
          id={item.id}
          name={item.name}
          expiryDate={item.expiry_date}
        />)
      );
      return (
        <List className="food-list-container"
        size="large"
        bordered
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
      );
    }
    return <div>No items found...</div>;
  }
}

export default FoodList;
