import './App.css';
import FoodList from './FoodList/FoodList.js'
import 'antd/dist/antd.css';
import NewItem from './NewItem/NewItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Eat List 🦑🥒🍚🥢</h1>
      </header>
      <NewItem />
      <FoodList />
    </div>
  );
}

export default App;
