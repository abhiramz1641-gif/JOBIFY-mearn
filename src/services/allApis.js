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
export const getUserApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/get-user`, reqBody)

}

// edit user
export const editUserApi = async (reqBody) => {

   return await commonApi("put", `${serverURL}/user-edit`, reqBody)

}

// post job
export const jobPostApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/add-job`, reqBody)

}

// posted jobs
export const jobsPostedApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/jobs-posted`, reqBody)

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
export const jobsApi = async () => {

   return await commonApi("get", `${serverURL}/all-jobs`, ' ')

}

// admin approval jobs
export const adminJobApprovalApi = async (reqBody) => {

   return await commonApi("put", `${serverURL}/admin-job-approval`, reqBody)

}

// admin application approval
export const adminApplicationApprovalApi = async (reqBody) => {

   return await commonApi("put", `${serverURL}/admin-application-approval`, reqBody)

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
export const allApplicationsApi = async () => {

   return await commonApi("get", `${serverURL}/get-applications`, ' ')

}

// applications by jobId
export const allApplicationsByJobIdApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/all-applications-jobId`, reqBody)

}

// applications by userMail
export const allApplicationsByUserMailApi = async (reqBody) => {

   return await commonApi("post", `${serverURL}/all-applications-by-user`, reqBody)

}

// employer application acceptance
export const employerApplicationAcceptenceApi = async (reqBody) => {

   return await commonApi("put", `${serverURL}/employer-application-acceptence`, reqBody)

}

// employer application reject
export const employerApplicationRejectApi = async (reqBody) => {

   return await commonApi("put", `${serverURL}/employer-application-reject`, reqBody)

}
