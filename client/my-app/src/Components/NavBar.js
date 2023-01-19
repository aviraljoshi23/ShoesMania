import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../Service/UserSlice';
import { clearCart } from '../Service/CartSlice';
export default function NavBar() {
    const {brandList} = useSelector(state=>state.brand.value);
    const  {user} =  useSelector(state=>state.user.value);
    
   let {isLoggedIn} =  useSelector(state=>state.user.value);
   let dispatch = useDispatch();
   let navigate =  useNavigate();
   const signout = ()=>{
    dispatch(logOut());
    dispatch(clearCart());
    navigate("/shop");
 }
    return <>
        <div className="container-fluid mb-5">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical"  style={{ height: 65, marginTop: -1, padding: 30 }} >
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                        <div className="navbar-nav w-100 overflow-hidden" style={{ height: 410 }}>
                            {
                                brandList.map((item,index)=>  <Link href="" key={index+1} className="nav-item nav-link">{item.brandName}</Link>)
                            }
                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <a href="" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="shop" className="nav-item nav-link">Shop</Link>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                            {
                                        isLoggedIn&&
                                        <Link to="UserCart" className="nav-item nav-link">User Cart</Link>
                                        }
                                        <a href="checkout.html" className="dropdown-item">Checkout</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                                <Link to="addBrand" className="nav-item nav-link">Add Brand</Link>
                                <Link to="/addProduct" className="nav-item nav-link">Add Shoes</Link>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                            {
                                !isLoggedIn&&
                                <Link to="/signUp" className="nav-item nav-link">Sign-Up</Link>
                            }
                            {
                                !isLoggedIn&&
                                <Link to="/signIn" className="nav-item nav-link">Sign In</Link>
                            }
                            {
                                isLoggedIn&&
                                <Link to="/signIn" onClick={signout} className="nav-item nav-link">Sign Out {user.useEmail}</Link>
                            }
                            </div>
                        </div>
                    </nav>
                    <div id="header-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{ height: 410 }}>
                                <img className="img-fluid" src="https://sneakernews.com/wp-content/uploads/2016/01/adidas-eqt-support-93-16-boost-black-white-green-6.jpg" alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: 700 }}>
                                        <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                        <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ height: 410 }}>
                                <img className="img-fluid" src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8&w=1000&q=80" alt="Image" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ maxWidth: 700 }}>
                                        <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                        <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                                <span className="carousel-control-prev-icon mb-n2"></span>
                            </div>
                        </a>
                        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                                <span className="carousel-control-next-icon mb-n2"></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}