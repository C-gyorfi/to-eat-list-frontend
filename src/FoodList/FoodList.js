import './FoodList.css';
import React, { useEffect, useState } from "react";
import ListItem from '../ListItem/ListItem';
import NewItem from '../NewItem/NewItem';
import { List } from 'antd';

const FoodList = () => {
  const [state, setState] = useState(0);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const renderFoodList = ()=> {
    setState(state + 1)
  }

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
  }, [state])

  if (error) {
    return <h1>Error: {error.message}</h1
    >;
  } else if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    var listItems = {}
    if (items.food_items) {
      listItems = items.food_items.map(item => (
        <ListItem
          id={item.id}
          name={item.name}
          expiryDate={item.expiry_date}
          renderFoodList={renderFoodList}
        />)
      );
      return (
        <>
          <NewItem renderFoodList={renderFoodList} />
          <List className="food-list-container"
          size="large"
          bordered
          dataSource={listItems}
          renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={item}
                />
              </List.Item>
            )}
          />
        </>
      );
    }
    return(
      <>
        <NewItem renderFoodList={renderFoodList} />
        <h1>No items found...🤷‍♀️</h1>
      </>
    )
  }
}

export default FoodList;
