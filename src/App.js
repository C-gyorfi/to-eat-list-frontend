import './App.css';
import FoodList from './FoodList/FoodList.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-eat list</h1>
      </header>
      <FoodList 
        items={
          [
            {name: "Butter", expiryDate: new Date(2018, 11, 24).toString()},
            {name: "Bread", expiryDate: new Date(2018, 11, 24).toString()},
            {name: "Milk", expiryDate: new Date(2018, 11, 30).toString()},
          ]
        }
      />
    </div>
  );
}

export default App;
