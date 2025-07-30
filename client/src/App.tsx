import { Routes, BrowserRouter as Router, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import CreateNote from "./pages/CreateNote";
import ProfilePage from "./pages/ProfilePage";
import UpdateNote from "./pages/UpdateNote";
import Restricted from "./components/Restricted";
import SingleNotePage from "./pages/SingleNotePage";
import AllUserNotesPage from "./pages/AllUserNotes";
import TrashNotesPage from "./pages/TrashNotesPage";
import axios from "axios";
import { useEffect } from "react";

useEffect(()=>{
  const ping = async () => {
    try{
      const response = await axios.get("https://notely-server-r48z.onrender.com/ping",
        {headers: {
          "secret": import.meta.env.PING_SECRET
        }
      })
      if(response) console.log(response);
    }catch(err) {
      console.log(err);
    }
  }
  ping();

  const pingInterval = setInterval(ping , 10 * 60 * 1000)

  return clearInterval(pingInterval)
}, [])

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route loader path="/" Component={Homepage} />
          <Route
            loader
            path="/dashboard"
            element={
              <Restricted>
                <DashboardPage />
              </Restricted>
            }
          />
          <Route
            loader
            path="/dashboard/create"
            element={
              <Restricted>
                <CreateNote />
              </Restricted>
            }
          />
          <Route
            loader
            path="/dashboard/profile"
            element={
              <Restricted>
                <ProfilePage />
              </Restricted>
            }
          />
          <Route
            loader
            path="/dashboard/update/:id"
            element={
              <Restricted>
                <UpdateNote />
              </Restricted>
            }
          />
          <Route
            loader
            path="/dashboard/Trash"
            element={
              <Restricted>
                <TrashNotesPage />
              </Restricted>
            }
          />
          <Route
            loader
            path="/dashboard/note"
            element={
              <Restricted>
                <AllUserNotesPage />
              </Restricted>
            }
          />
          <Route
            loader
            path="/dashboard/note/:id"
            element={
              <Restricted>
                <SingleNotePage />
              </Restricted>
            }
          />
          <Route loader path="/login" Component={LoginPage} />
          <Route loader path="/register" Component={RegisterPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
