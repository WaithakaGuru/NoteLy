import {Routes, BrowserRouter as Router, Route} from "react-router"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route loader path="/" Component={Homepage}/>
        <Route loader path="/login" Component={LoginPage}/>
        <Route loader path="/register" Component={RegisterPage}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
