import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
import axios from 'axios'

function App() {
  const ENDPOINT = "https://chatter-m.onrender.com";
  axios.interceptors.request.use(
    (config) => {

      let str = config.url;
      config.url = ENDPOINT + str;


      return config
    },
    error => {
      Promise.reject(error)
    }
  )

  return (

    <div className="App">

      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} />

    </div>




  );
}

export default App;
