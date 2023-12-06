import { Link } from "react-router-dom";


const Navbar = () => {
   
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">AboutUs</Link></li>
        <li><Link to="/ContactUs">Contact Us</Link></li>
        {/* <li><Link to="/ChefDetails">ChefDetails</Link></li> */}
        {/* <li><Link to="/Services">Services</Link></li> */}
        {/* <li><Link to="/SignIn">SignUp</Link></li> */}
        {/* <li><Link to="/LogIn">LogIn</Link></li> */}
        {/* <li><Link to="/Testimonials">Testimonials</Link></li> */}
   </>

    return (
        <div>
             {/* Navigation Bar */}
             <div className="navbar fixed z-10 bg-opacity-50 max-w-screen-2xl bg-fuchsia-950 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Victopus</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn animate-pulse">Free Coupons!!</a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;