import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import LoginPage from "./pages/LoginPage"
import UserDashboard from "./user/Job_Seeker/pages/UserDashboard"
import JobSearch from "./user/Job_Seeker/pages/JobSearch"
import JobView from "./user/Job_Seeker/pages/JobView"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/jobs" element={<JobSearch />} />
        <Route path="/jobview" element={<JobView/>} />
      </Routes>
    </>
  )
}

export default App
