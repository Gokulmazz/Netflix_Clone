import Nav from './components/Navigation/Nav';
import Midpart from './components/Header/Head';
import Content from './components/content/Content';
import axios from 'axios';
import './App.css';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '8d564b583c68182d0ec480a21aec16b9', // ! Add your API key here
};
function App() {
  return (
    <div>
      <Nav />
      <Midpart />
      <Content />

    </div>
  );
}

export default App;
