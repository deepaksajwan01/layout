import Nav from "./components/Nav"
import Card from "./components/card/Card"
import Drawer from "./components/drawer/Drawer"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='hero-section'>
        <Drawer />
        <Card />
      </div>
    </div>
  )
}

export default App
