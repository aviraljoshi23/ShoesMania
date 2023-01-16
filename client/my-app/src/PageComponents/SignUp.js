import { ToastContainer,toast } from "react-toastify";
import WebService from "../WebWork/webService";
import WebApi from "../WebWork/WebApi";
import { useState } from "react";
export default function SignUp(){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signUp = async (event)=>{
        event.preventDefault();
        console.log(email+" "+ password);
        let response = await WebService.postApi(WebApi.USER_SIGNUP,{userEmail: email, userPassword: password});
        if(response.status){ 
         toast.success("Account Created");
        }
        else
          toast.error("Signup Failed...");   
      }
    return <>
    <ToastContainer/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="mb-4">
                        <h4 class="font-weight-semi-bold mb-4 text-center">New Account</h4>
                        <hr/>
                        <form onSubmit={signUp}>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label>User Email Id</label>
                                <input class="form-control" type="text"  onChange={(event)=>setEmail(event.target.value)}placeholder="John" />
                            </div>
                            <div class="col-md-6 form-group">
                                <label>User Password</label>
                                <input class="form-control input-group-append" onChange={(event)=>setPassword(event.target.value)} type="password" />
                            </div>
                            <div class="input-group-append text-center">
                                <button type="submit" class="btn btn-primary px-4 ">Create Account</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}