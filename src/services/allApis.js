import commonApi from "./commonApi"
import { serverURL } from "./serverURL"

// register
export const registerApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/register`, reqBody)

}

// login
export const loginApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/login`, reqBody)

}

//get user
export const getUserApi = async (reqBody,reqHeader) => {

   return await commonApi("post", `${serverURL}/get-user`, reqBody,reqHeader)

}

// edit user
export const editUserApi = async (reqBody,reqHeader) => {

   return await commonApi("put", `${serverURL}/user-edit`, reqBody,reqHeader)

}

// post job
export const jobPostApi = async (reqBody,reqHeader) => {

   return await commonApi("post", `${serverURL}/add-job`, reqBody,reqHeader)

}

// posted jobs
export const jobsPostedApi = async (reqBody,reqHeader) => {

   return await commonApi("post", `${serverURL}/jobs-posted`, reqBody,reqHeader)

}

// job by id
export const jobsByIdApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/jobs-postedById`, reqBody)

}

// jobs by employer
export const jobsByEmployerApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/jobs-postedBy-employer`, reqBody)

}

// edit job
export const editJobApi = async (reqBody) => {

   return await commonApi("put", `${serverURL}/job-edit`, reqBody)

}

// all jobs
export const jobsApi = async (reqHeader) => {

   return await commonApi("get", `${serverURL}/all-jobs`, ' ',reqHeader)

}


// application apply 
export const applyApplicationApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/add-application`, reqBody)

}

// applied status 
export const appliedStatusApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/get-applied-status`, reqBody)

}

// all applications
export const allApplicationsApi = async (reqHeader) => {

   return await commonApi("get", `${serverURL}/get-applications`, ' ',reqHeader)

}

// applications by jobId
export const allApplicationsByJobIdApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/all-applications-jobId`, reqBody)

}

// applications by userMail
export const allApplicationsByUserMailApi = async (reqBody,reqHeader) => {

   return await commonApi("post", `${serverURL}/all-applications-by-user`, reqBody,reqHeader)

}

// employer application acceptance
export const employerApplicationAcceptenceApi = async (reqBody) => {

   return await commonApi("put", `${serverURL}/employer-application-acceptence`, reqBody)

}

// employer application reject
export const employerApplicationRejectApi = async (reqBody) => {

   return await commonApi("put", `${serverURL}/employer-application-reject`, reqBody)

}





// .............admin............
//get admin user
export const getAdminUserApi = async (reqBody,reqHeader) => {

   return await commonApi("post", `${serverURL}/get-user-admin`, reqBody,reqHeader)

}

//all jobs admin
export const adminJobsApi = async (reqHeader) => {

   return await commonApi("get", `${serverURL}/all-jobs-admin`, ' ',reqHeader)

}

// all applications
export const allApplicationsAdminApi = async (reqHeader) => {

   return await commonApi("get", `${serverURL}/get-applications-admin`, ' ',reqHeader)

}

// admin approval jobs
export const adminJobApprovalApi = async (reqBody,reqHeader) => {

   return await commonApi("put", `${serverURL}/admin-job-approval`, reqBody,reqHeader)

}

// admin application approval
export const adminApplicationApprovalApi = async (reqBody,reqHeader) => {

   return await commonApi("put", `${serverURL}/admin-application-approval`, reqBody,reqHeader)

}