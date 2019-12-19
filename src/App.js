import React from 'react';

// redux stuffs
import { Provider } from "react-redux";
import store from "./redux/store";

// private routing
import Main from "./components/utilities/Main";
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
