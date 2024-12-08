import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from 'react-tooltip'



const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);
    // console.log(user);


    const [profilePhoto, setProfilePhoto] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (user) {
            setProfilePhoto(user.photoURL);
            setUserName(user.displayName);
        }
    }, [user]);






    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                // console.log('user log out successful');
                Swal.fire({
                    title: 'Log out done!',
                    // text: 'Invalid Email or Password!!',
                    icon: 'warning',
                    confirmButtonText: 'ok'
                });
                // setProfilePhoto('');
                // setUserName('');
            })
            .catch(error => console.log('ERROR', error.message))
    }



    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allEquipments">All Equipments</NavLink></li>
        {
            user && <>
                <li data-tooltip-id="my-tooltip"
                    data-tooltip-content="Add New Equipment"
                    data-tooltip-place="bottom-end"><NavLink to="/addEquipments">Add</NavLink></li>
                <li data-tooltip-id="my-tooltip"
                    data-tooltip-content="Your Own Equipment List"
                    data-tooltip-place="bottom-end"><NavLink to={`/myEquipmentsList/${user.email}`}>My List</NavLink></li>
            </>
        }
    </>


    return (
        <div className="navbar font-semibold bg-orange-400/85 py-4 px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-2xl">SportsSphere</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="flex justify-center items-center gap-3">
                                <p className="text-sm font-bold text-center text-gray-800">Current <br />User</p>
                                <p className="text-lg font-bold">{userName}</p>
                                <div><img data-tooltip-id="my-tooltip"
                                    data-tooltip-content={userName}
                                    data-tooltip-place="bottom-end" className="w-11 rounded-full cursor-pointer" src={profilePhoto} alt="photo" /></div>
                                <div><a onClick={handleLogOut} className="btn">Log Out</a></div>
                            </div>
                        </>
                        :
                        <>
                            <NavLink to="/login"><button className="btn btn-ghost">Login</button></NavLink>
                            <p className="px-1">or</p>
                            <NavLink to="/register"><button className="btn btn-ghost">Register</button></NavLink>
                        </>
                }
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navbar;