import './App.css';
import FoodList from './FoodList/FoodList.js'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-eat list</h1>
      </header>
      <FoodList 
        items={
          [
            {name: "Butter", expiryDate: new Date(2018, 11, 24).toISOString().split('T')[0]},
            {name: "Bread", expiryDate: new Date(2018, 11, 26).toISOString().split('T')[0]},
            {name: "Milk", expiryDate: new Date(2018, 11, 30).toISOString().split('T')[0]},
          ]
        }
      />
    </div>
  );
}

export default App;
