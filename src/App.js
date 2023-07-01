import { Route, Routes } from 'react-router';
import './App.css';
import { Landing } from './Landing';
import { RecipeDetails } from './RecipeDetails/RecipeDetails';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/recipe/:id"  element={<RecipeDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
