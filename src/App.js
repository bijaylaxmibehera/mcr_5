import { Route, Routes } from 'react-router';
import './App.css';
import { Landing } from './Landing';
import { Header } from './Header/Header';
import { RecipeDetails } from './RecipeDetails/RecipeDetails';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/recipe/:id"  element={<RecipeDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
