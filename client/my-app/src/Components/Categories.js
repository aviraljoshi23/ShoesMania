import { useSelector } from "react-redux";
export default function Categories() {
    const { brandList } = useSelector(state => state.brand.value);
    return <>
        <div class="container-fluid pt-5">
            <div class="row px-xl-5 pb-3">
                {
                    brandList.map((item) =>
                        <div class="col-lg-4 col-md-6 pb-1">
                            <div class="cat-item d-flex flex-column border mb-4" style={{ padding: "30px" }}>
                                <p class="text-right">{item.brandName}</p>
                                <a href="" class="cat-img position-relative overflow-hidden mb-3">
                                    <img class="img-fluid" src={"/BrandImages/"+item.brandImage} style={{ height: 300, width: 400 }} alt="" />
                                </a>
                                <h5 class="font-weight-semi-bold m-0">{item.brandName}</h5>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </>
}