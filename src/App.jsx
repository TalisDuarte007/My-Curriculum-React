import './App.css';
import Header from './components/header';
import Main from './components/main';
import config from "./config.json"

function App() {
  return (
    <>
      <Header config={config}/>
      <Main config={config}/>
    </>
    
  );
}

export default App;
