import './App.css';
import Main from './Components/Main'
import cityscape from './assets/cityscape.png'
import Notification from './Components/Notification'
function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <img src={cityscape} className="cityscape" alt="img"/>
      <Notification/>
      <Main/>
    </div>
  );
}

export default App;
