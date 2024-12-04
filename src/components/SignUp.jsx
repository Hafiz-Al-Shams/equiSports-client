import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";



const SignUp = () => {

    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);


    const handleSignup = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        // navigate('/addEquipments');
                        // e.target.reset();
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(error => {
                console.log('ERROR', error.message)
            })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>SportsSphere | SignUp</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-8">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p>Already have an account?</p>
                        <Link to="/login">
                            <button className="mt-1.5 btn btn-neutral px-8">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;