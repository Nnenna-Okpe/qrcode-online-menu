import './App.css';
import { Dishes } from './components/dishes';
import { Home } from './components/home';
import {Specials} from './components/specials';

const backgroundImage = '/images/peter-gargiulo-cGNCepznaV8-unsplash.jpg';

function App() {
  return (
    <div className="App"
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   minHeight: '100vh',
      //   position: 'relative',
      // }}
      >
        
      <Home />
    </div>
  );
}

export default App;
