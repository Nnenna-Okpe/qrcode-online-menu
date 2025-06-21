import './App.css';
import { Dishes } from './components/dishes';
import { Home } from './components/home';
import {Specials} from './components/specials';

const backgroundImage = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

function App() {
  return (
    <div className="App"
      style={{
       position: "relative",

          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
      }}
      >
        
      <Home />
    </div>
  );
}
//  backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
export default App;
