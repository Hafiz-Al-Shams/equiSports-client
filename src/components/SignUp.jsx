import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";



const SignUp = () => {

    const navigate = useNavigate();
    const { createUser, updateUserProfile, logInWithGoogle, logOutUser } = useContext(AuthContext);



    const handleSignup = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            Swal.fire({
                // title: 'Error!',
                text: 'Password must be 6 characters or longer',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
            return;
        }

        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,15}$/;

        if (!passRegex.test(password)) {
            Swal.fire({
                // title: 'Error!',
                text: 'at least one number, one uppercase & one lowercase is needed',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {

                        // Swal.fire({
                        //     title: 'Registration Successful',
                        //     // text: 'Now please Login to continue',
                        //     icon: 'success',
                        //     confirmButtonText: 'ok'
                        // });


                        logOutUser()
                            .then(() => {
                                // console.log('user log out successful');
                                Swal.fire({
                                    title: 'Registration Successful',
                                    text: 'Now please Login to Continue',
                                    icon: 'success',
                                    confirmButtonText: 'ok'
                                });
                                e.target.reset();
                                navigate('/login');
                            })
                            .catch(error => console.log('ERROR', error.message))


                    })
                    .catch(err => {
                        console.log(err);
                        Swal.fire({
                            title: 'Error!',
                            icon: 'error',
                            confirmButtonText: 'Try Again'
                        });
                    })
            })
            .catch(error => {
                console.log('ERROR', error.message)
            })
    }


    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result.user);
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
                    <div className="text-center mt-3">
                        <button onClick={handleGoogleLogIn} className="btn btn-ghost text-lg font-medium px-8">Log in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;