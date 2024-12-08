import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";


import Add from '../Add.json'


const AddEquipts = () => {

    const { user } = useContext(AuthContext);


    const handleAddEquipment = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const deliveryTime = form.deliveryTime.value;
        const availableQuantity = form.availableQuantity.value;
        const photo = form.photo.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        const newEquipment = { name, category, description, price, rating, customization, deliveryTime, availableQuantity, photo, userName, userEmail };
        // console.log(newEquipment);

        // sending data to the server
        fetch('https://equi-sports-server.vercel.app/equipments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);




                if (data.insertedId) {
                    // console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    // form.reset();
                }
            })

    }


    return (
        <div>
            <Helmet>
                <title>SportsSphere | Add Equipment</title>
            </Helmet>

            <div className='lg:w-3/4 mx-auto'>
                <div className="flex justify-center items-center gap-12 pt-6 pb-8">
                    <div className="w-28"><Lottie animationData={Add}></Lottie></div>
                    <h1 className="text-5xl font-bold">Add New Equipment</h1>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleAddEquipment} className="card-body">
                        {/* form first row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="equipment name" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <input type="text" name='category' placeholder="category name" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form second row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' placeholder="description" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' placeholder="price" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form third row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" name='rating' placeholder="rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <input type="text" name='customization' placeholder="customization" className="input input-bordered" required />
                            </div>
                        </div>

                        {/* form fourth row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <input type="number" name='deliveryTime' placeholder="delivery time in hours" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input type="text" name='availableQuantity' placeholder="available product quantity" className="input input-bordered" required />
                            </div>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photoURL" className="input input-bordered" required />

                        </div>


                        {/* form sixth row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='userName' defaultValue={user.displayName} readOnly className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" name='userEmail' defaultValue={user.email} readOnly placeholder="" className="input input-bordered" required />
                            </div>
                        </div>




                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Equipment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEquipts;