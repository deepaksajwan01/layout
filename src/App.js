import { BrowserRouter, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav"
import Card from "./components/card/Card"
import Drawer from "./components/drawer/Drawer"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <div className='hero-section'>
          <Drawer />
          <Card />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
