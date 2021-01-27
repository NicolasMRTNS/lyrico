import './App.css';
import GetStarted from './Components/GetStarted';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <GetStarted inputName="Artist" />
      <GetStarted inputName="Song" />
    </>
  );
}

export default App;
