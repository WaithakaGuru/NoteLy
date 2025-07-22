import {Routes, BrowserRouter as Router, Route} from "react-router"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/DashboardPage"
import CreateNote from "./pages/CreateNote"
import ProfilePage from "./pages/ProfilePage"
import UpdateNote from "./pages/UpdateNote"
function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route loader path="/" Component={Homepage}/>
        <Route loader path="/dashboard" Component={DashboardPage}/>
        <Route loader path="/dashboard/create" Component={CreateNote}/>
        <Route loader path="/dashboard/profile" Component={ProfilePage}/>
        <Route loader path="/dashboard/update" Component={UpdateNote}/>
        <Route loader path="/login" Component={LoginPage}/>
        <Route loader path="/register" Component={RegisterPage}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
