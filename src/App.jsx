import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import LoginPage from "./pages/LoginPage"
import UserDashboard from "./user/Job_Seeker/pages/UserDashboard"
import JobSearch from "./user/Job_Seeker/pages/JobSearch"
import JobView from "./user/Job_Seeker/pages/JobView"
import EmployerDashboard from "./user/Employer/pages/EmployerDashboard"
import JobPosted from "./user/Employer/pages/JobPosted"
import EmployerJobEdit from "./user/Employer/pages/EmployerJobEdit"
import JobApplications from "./user/Employer/pages/JobApplications"
import JobPost from "./user/Employer/pages/JobPost"
import ViewApplication from "./user/Employer/pages/ViewApplication"
import AdminDashbord from "./Admin/pages/AdminDashbord"
import MyApplications from "./user/Job_Seeker/pages/myApplications"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />

        {/* job seeker */}
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/jobs" element={<JobSearch />} />
        <Route path="/jobview/:id" element={<JobView/>} />
        <Route path="/my-applications" element={<MyApplications/>} />

        {/* employer */}
        <Route path="/EmployerDashboard" element={<EmployerDashboard/>} />
        <Route path="/JobPosted" element={<JobPosted/>} />
        <Route path="/JobEdit/:id" element={<EmployerJobEdit/>} />
        <Route path="/jobApplications" element={<JobApplications/>} />
        <Route path="/jobPost" element={<JobPost/>} />
        <Route path="/ViewApplication/:id" element={<ViewApplication/>} />

        {/* admin */}
        <Route path="/AdminDashboard" element={<AdminDashbord/>} />
      </Routes>
    </>
  )
}

export default App
