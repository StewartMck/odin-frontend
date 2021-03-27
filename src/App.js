import './App.css'
import FeaturedCard from './Components/Card/FeaturedCard.js';
import AppBar from './Components/AppBar/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <div className="Cards">
      <FeaturedCard/>
      <FeaturedCard/>
      </div>
    </div>
  );
}

export default App;
