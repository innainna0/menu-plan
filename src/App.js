import './App.css';
import { GroceryList } from './GroceryList';
import image from "./coffeBeans.jpg"
import imageTwo from "./food5.jpg"


function App() {
  return (
    <div className="App">
      <img src={image} alt='coffe' width="300px"/>
      <h2>MENU PLANNER</h2>
      <GroceryList />
      <img src={imageTwo} alt='coffetwo' width='300px'/>
    </div>
  );
}

export default App;
