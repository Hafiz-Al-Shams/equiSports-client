import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";



const SignIn = () => {

    const navigate = useNavigate();

    const { loginUser, logInWithGoogle } = useContext(AuthContext);

    const handleSignin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        loginUser(email, password)
            .then(result => {
                // console.log(result.user);
                Swal.fire({
                    title: 'Login Successful',
                    icon: 'success',
                    confirmButtonText: 'ok'
                });
                e.target.reset();
                navigate(`/myEquipmentsList/${result.user.email}`);
            })
            .catch(error => {
                console.log('ERROR from Firebase', error.message);
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid Email or Password!!',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            })

    }

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                // console.log(result.user);
                Swal.fire({
                    title: 'Login Successful',
                    icon: 'success',
                    confirmButtonText: 'ok'
                });
                navigate(`/myEquipmentsList/${result.user.email}`);
            })
            .catch(error => console.log('ERROR', error.message))
    }


    return (
        <div className="hero bg-base-100 min-h-[60vh] mt-10 mb-20">
            <Helmet>
                <title>SportsSphere | Login</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login to continue!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-8">
                    <form onSubmit={handleSignin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p>New to this website?</p>
                        <Link to="/register">
                            <button className="mt-1.5 btn btn-success text-white">Create new account</button>
                        </Link>
                    </div>
                    <div className="text-center mt-3">
                        <button onClick={handleGoogleLogIn} className="btn text-lg font-medium px-8">Log in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;