import Subscribe from "./Subscribe";
import JustArrived from "./JustArrived";
import IndexProduct from "./IndexProduct";
import Feature from "./Feature";
import Categories from "./Categories";
import Offer from "./Offer";
import Vendor from "./Vendor";
import { Link } from "react-router-dom";
export default function Index(){
    return<>
    <Feature></Feature>
    <Categories></Categories>
    <Offer></Offer>
    <IndexProduct></IndexProduct>
    <Subscribe></Subscribe>
    <JustArrived></JustArrived>
    <Vendor></Vendor>
    </>
}