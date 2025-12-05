import commonApi from "./commonApi"
import { serverURL } from "./serverURL"

// register
export const registerApi= async(reqBody)=>{

   return await commonApi("post",`${serverURL}/register`,reqBody)

}

// login
export const loginApi= async(reqBody)=>{

   return await commonApi("post",`${serverURL}/login`,reqBody)

}

//get user
export const getUserApi= async(reqBody)=>{

   return await commonApi("post",`${serverURL}/get-user`,reqBody)

}

// edit user
export const editUserApi= async(reqBody)=>{

   return await commonApi("put",`${serverURL}/user-edit`,reqBody)

}


// post job
export const jobPostApi= async(reqBody)=>{

   return await commonApi("post",`${serverURL}/add-job`,reqBody)

}

// posted jobs
export const jobsPostedApi= async(reqBody)=>{

   return await commonApi("post",`${serverURL}/jobs-posted`,reqBody)

}

// job by id
export const jobsByIdApi= async(reqBody)=>{

   return await commonApi("post",`${serverURL}/jobs-postedById`,reqBody)

}

// edit job
export const editJobApi= async(reqBody)=>{

   return await commonApi("put",`${serverURL}/job-edit`,reqBody)

}

// all jobs
export const jobsApi= async()=>{

   return await commonApi("get",`${serverURL}/all-jobs`,' ')

}

// admin approval jobs
export const adminJobApprovalApi= async(reqBody)=>{

   return await commonApi("put",`${serverURL}/admin-job-approval`,reqBody)

}



