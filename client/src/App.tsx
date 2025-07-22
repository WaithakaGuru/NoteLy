import {Routes, BrowserRouter as Router, Route} from "react-router"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/DashboardPage"
import CreateNote from "./pages/CreateNote"
import ProfilePage from "./pages/ProfilePage"
import UpdateNote from "./pages/UpdateNote"
import Restricted from "./components/Restricted"
function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route loader path="/" Component={Homepage}/>
        <Route loader path="/dashboard" element={
          <Restricted><DashboardPage/></Restricted>
        }/>
        <Route loader path="/dashboard/create" element={
          <Restricted>
            <CreateNote/>
          </Restricted>
          }
        />
        <Route loader path="/dashboard/profile" element={
         <Restricted>
           <ProfilePage/>
         </Restricted>
          }
        />
        <Route loader path="/dashboard/update" element={
          <Restricted>
            <UpdateNote/>
          </Restricted>
        }
        />
        <Route loader path="/login" Component={LoginPage}/>
        <Route loader path="/register" Component={RegisterPage}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
