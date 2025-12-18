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
import AutomatedJobSearch from "./user/Job_Seeker/pages/AutomatedJobSearch"
import ChatBot from "./user/Job_Seeker/components/ChatBot"
import { useEffect, useState } from "react"
import AllMyApplications from "./user/Job_Seeker/pages/AllMyApplications"
import Preloader from "./components/Preloader"
import ResumeScanner from "./components/ResumeScanner"


function App() {

  const isLoggedIn=sessionStorage.getItem('token')

  const [loader,setLoader]=useState(true)

  setTimeout(()=>{

    setLoader(false)

  },4500)

  return (
    <>
      <Routes>
        <Route path="/" element={loader && !isLoggedIn?<Preloader/>:<Landing />} />
        {/* <Route path="/preloader" element={<Preloader />} /> */}
        <Route path="/login" element={<LoginPage />} />

        {/* job seeker */}
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/jobs" element={<JobSearch />} />
        <Route path="/jobview/:id" element={<JobView />} />
        <Route path="/my-applications" element={<AllMyApplications />} />
        <Route path="/automated-job-search" element={<AutomatedJobSearch />} />

        {/* employer */}
        <Route path="/EmployerDashboard" element={<EmployerDashboard />} />
        <Route path="/JobPosted" element={<JobPosted />} />
        <Route path="/JobEdit/:id" element={<EmployerJobEdit />} />
        <Route path="/jobApplications" element={<JobApplications />} />
        <Route path="/jobPost" element={<JobPost />} />
        <Route path="/ViewApplication/:id" element={<ViewApplication />} />

        {/* admin */}
        <Route path="/AdminDashboard" element={<AdminDashbord />} />
        
        
        
        
        {/* <Route path="/resumeParse" element={<ResumeScanner />} /> */}


      </Routes>

      {/* Chatbot */}
      {isLoggedIn && <ChatBot />}
    </>
  )
}

export default App
