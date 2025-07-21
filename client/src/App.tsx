import {Routes, BrowserRouter as Router, Route} from "react-router"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
function App() {

  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route loader path="/" Component={Homepage}>

        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
