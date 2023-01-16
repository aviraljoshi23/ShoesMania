import axios from "axios";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import WebApi from "../WebWork/WebApi";
import WebService from "../WebWork/webService";
import { add } from "../Service/BrandSlice";
import { useDispatch, useSelector } from "react-redux";
export default function AddProduct() {
    const { brandList } = useSelector(state => state.brand.value);
    const {productList} = useSelector(state=>state.product.value);
    let brandIdField = useRef();
    let productNameField = useRef();
    let productPriceField = useRef();
    let productColorField = useRef();
    let productDescriptionField = useRef();
    let productMaterialField = useRef();
    let productPreviousPriceField = useRef();
    let productQtyField = useRef();
    const [productImage, setProductImage] = useState([]);
    let ShoeSize = [6, 7, 8, 9, 10];

    const save = async (e) => {
        e.preventDefault();

        let status = productList.some(item=> item.productName == productNameField.current.value);  
        if(status){
            toast.warning("This Product is already exist in system");
        }
        else{
            let formData = new FormData();
            formData.set("brandId", brandIdField.current.value);
            for (let i = 0; i < productImage.length; i++) {
                formData.append("productImage", productImage[i]);
            }
            formData.set("productName", productNameField.current.value);
            formData.set("productPrice", productPriceField.current.value);
            formData.set("productDescription", productDescriptionField.current.value);
            formData.set("productPreviousPrice", productPreviousPriceField.current.value);
            formData.set("productSize", ShoeSize);
            formData.set("productColor", productColorField.current.value);
            formData.set("productMaterial", productMaterialField.current.value);
            formData.set("productQty", productQtyField.current.value);
            try {
                let res = await WebService.postApi(WebApi.ADD_PRODUCT, formData);
                if (res.data.status) {
                    toast.success("Product Added Successfully");
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    const getImage = (e) => {
        setProductImage(e.target.files)
    }
    return <>
        <ToastContainer />
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="mb-4">
                        <h4 className="font-weight-semi-bold mb-4 text-center">Add New Product</h4>
                        <hr />
                        <form onSubmit={save}>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>Product Name</label>
                                    <input className="form-control" ref={productNameField} type="text" placeholder="John" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Brand Name</label>
                                    <select className="custom-select" ref={brandIdField}>
                                        {
                                            brandList.map((item, index) =>
                                                <option key={index} value={item._id}>{item.brandName}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Product Price</label>
                                    <input className="form-control" ref={productPriceField} type="number" placeholder="Rs" required />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Product Color</label>
                                    <input className="form-control" ref={productColorField} type="text" placeholder="John" required/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Product Description</label>
                                    <textarea rows={5} className="form-control" ref={productDescriptionField} type="text" placeholder="John" required />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Product  Material</label>
                                    <input className="form-control" ref={productMaterialField} type="text" placeholder="John" required />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Product Previous Price</label>
                                    <input className="form-control" ref={productPreviousPriceField} type="number" placeholder="Rs" required />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Total Products (For This Specific Band Only)</label>
                                    <input className="form-control" type="number" ref={productQtyField} placeholder="No. of Product Available" required />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Product Images (Total 4)</label>
                                    <input className="form-control input-group-append" onChange={getImage} multiple type="file"  required/>
                                </div>
                                <div className="input-group-append text-center">
                                    <button type="submit" className="btn btn-primary px-4 ">Add Product</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}