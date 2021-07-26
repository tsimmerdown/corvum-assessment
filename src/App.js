import React from "react"
import { CookiesProvider } from "react-cookie"
import './App.css';
import Modal from "./components/Modal/modal"

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <Modal/>
      </div>
    </CookiesProvider>
  );
}

export default App;
