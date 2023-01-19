import { ToastContainer,toast } from "react-toastify";
import WebService from "../WebWork/webService";
import WebApi from "../WebWork/WebApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../Service/UserSlice";
import { fetchCart } from "../Service/CartSlice";
export default function SignIn(){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate =  useNavigate();
    const dispatch = useDispatch()
    const signin = async (event)=>{
        event.preventDefault();
        try{
         let response = await WebService.postApi(WebApi.USER_SIGNIN,{userEmail:email,userPassword:password});
         if(response.data.status){
            dispatch(setCurrentUser(response.data.result));
            dispatch(fetchCart(response.data.result._id));
            // navigate("/shop"); 
            toast.success("Sign IN Successfully");
         }  
        }
        catch(error){
            toast.error("Invalid email or password");
        }  
       }
    return <>
    <ToastContainer/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="mb-4">
                        <h4 class="font-weight-semi-bold mb-4 text-center">Sign In Here</h4>
                        <hr/>
                        <form onSubmit={signin}>
                        <div class="row">-
                            <div class="col-md-6 form-group">
                                <label>User Email Id</label>
                                <input class="form-control" type="text"  onChange={(event)=>setEmail(event.target.value)}placeholder="John" />
                            </div>
                            <div class="col-md-6 form-group">
                                <label>User Password</label>
                                <input class="form-control input-group-append" onChange={(event)=>setPassword(event.target.value)} type="password" />
                            </div>
                            <div class="input-group-append text-center">
                                <button type="submit" class="btn btn-primary px-4 ">Sign In</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}