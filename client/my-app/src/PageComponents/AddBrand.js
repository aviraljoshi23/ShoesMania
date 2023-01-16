import axios from "axios";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import WebApi from "../WebWork/WebApi";
import WebService from "../WebWork/webService";
import { add } from "../Service/BrandSlice";
import { useDispatch, useSelector } from "react-redux";
export default function AddBrand() {
    const {brandList} = useSelector(state=> state.brand.value);

    const brandNameField =  useRef();
    let fileName  =   useRef();
    let dispatch = useDispatch();
    const save = async(e)=>{
        e.preventDefault();
        let status = brandList.some(item=> item.brandName == brandNameField.current.value);  
        if(status){
            toast.warning("This Brand Already Exist in System");
        }
        else{
            let formData =  new FormData();
            formData.append("brandImage",fileName);
            formData.set("brandName",brandNameField.current.value); 
            let res = await WebService.postApi(WebApi.ADD_BRAND,formData);
            if (res.data.status) {
                dispatch(add(formData));
                toast.success("Data is Added");
            }
        }
    }
    const onFileChange = (event)=>{
        fileName = event.target.files[0];
      }
    return <>
    <ToastContainer/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="mb-4">
                        <h4 class="font-weight-semi-bold mb-4 text-center">Add New Brand</h4>
                        <hr/>
                        <form onSubmit={save}>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label>Brand Name</label>
                                <input class="form-control" type="text" ref={brandNameField} placeholder="John" />
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Brand Logo</label>
                                <input class="form-control input-group-append" onChange={onFileChange} type="file" />
                            </div>
                            <div class="input-group-append text-center">
                                <button type="submit" class="btn btn-primary px-4 ">Add Brand</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}