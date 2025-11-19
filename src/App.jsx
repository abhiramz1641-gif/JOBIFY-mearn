import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import LoginPage from "./pages/LoginPage"
import UserDashboard from "./user/pages/UserDashboard"
import JobSearch from "./user/pages/JobSearch"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/jobs" element={<JobSearch />} />
      </Routes>
    </>
  )
}

export default App
