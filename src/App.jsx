import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import config from "./config.json"

function App() {
  return (
    <>
      <Header config={config}/>
      <Main config={config}/>
      <Footer/>
    </>
    
  );
}

export default App;
