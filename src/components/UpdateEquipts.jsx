import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";



const UpdateEquipts = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate();

    const equipment = useLoaderData();


    const { _id, name, category, description, price, rating, customization, deliveryTime, availableQuantity, photo, userName, userEmail } = equipment;



    const handleUpdateEquipment = e => {
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

        const UpdatedEquipment = { name, category, description, price, rating, customization, deliveryTime, availableQuantity, photo, userName, userEmail };
        console.log(UpdatedEquipment);

        // sending data to the server
        fetch(`http://localhost:5000/equipments/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UpdatedEquipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);




                if (data.modifiedCount > 0) {
                    console.log('successfully updated');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    form.reset();
                    navigate('/myEquipmentsList');
                }
            })

    }



    return (
        <div>
            <Helmet>
                <title>SportsSphere | Update</title>
            </Helmet>
            <div className='lg:w-3/4 mx-auto'>
                <div className="text-center p-10">
                    <h1 className="text-5xl font-bold">Update Equipment: {name}</h1>
                    {/* <p className="py-6">
                        Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p> */}
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdateEquipment} className="card-body">
                        {/* form first row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={name} placeholder="equipment name" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <input type="text" name='category' defaultValue={category} placeholder="category name" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form second row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' defaultValue={description} placeholder="description" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' defaultValue={price} placeholder="price" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form third row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" name='rating' defaultValue={rating} placeholder="rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <input type="text" name='customization' defaultValue={customization} placeholder="customization" className="input input-bordered" required />
                            </div>
                        </div>

                        {/* form fourth row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <input type="number" name='deliveryTime' defaultValue={deliveryTime} placeholder="delivery time in hours" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input type="text" name='availableQuantity' defaultValue={availableQuantity} placeholder="available product quantity" className="input input-bordered" required />
                            </div>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photo' defaultValue={photo} placeholder="photoURL" className="input input-bordered" required />

                        </div>


                        {/* form sixth row */}
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='userName' defaultValue={userName} readOnly className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" name='userEmail' defaultValue={userEmail} readOnly placeholder="" className="input input-bordered" required />
                            </div>
                        </div>




                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Equipment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateEquipts;