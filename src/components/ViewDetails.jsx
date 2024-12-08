import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";

import Details from '../Details.json'



const ViewDetails = () => {


    const { user } = useContext(AuthContext);

    const equipment = useLoaderData();
    const { _id, name, category, description, price, rating, customization, deliveryTime, availableQuantity, photo, userEmail } = equipment;


    const handleEdit = () => {
        Swal.fire({
            title: 'Invalid Authority',
            text: 'You can only Edit Equipment from your Own List',
            icon: 'error',
            confirmButtonText: 'understood'
        });
    }


    return (
        <div className="">
            <Helmet>
                <title>SportsSphere | Details</title>
            </Helmet>
            <div className="flex justify-center items-center gap-7 pt-6 pb-2">
                <div className="w-40"><Lottie animationData={Details}></Lottie></div>
                <h1 className="text-5xl font-bold">{name}</h1>
            </div>
            <div className="card lg:card-side bg-base-200/20 shadow-xl w-8/12 mx-auto mt-1 p-2 mb-8">
                <figure>
                    <img
                        src={photo}
                        className="w-[450px] p-12"
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-4">Category: {category}</h2>
                    <p className="font-semibold text-lg text-gray-700">Price: {price}</p>
                    <p className="font-semibold text-lg text-gray-700">Available in Stock: {availableQuantity}</p>
                    <p className="font-semibold text-lg text-gray-700">Rating: {rating}</p>
                    <p className="font-semibold text-lg text-gray-700">Description: {description}</p>
                    <p className="font-semibold text-lg text-gray-700">Delivery Time needed: {deliveryTime}</p>
                    <p className="font-semibold text-lg text-gray-700">Custom info: {customization}</p>
                    <div className="card-actions justify-end">
                        {
                            user.email == userEmail
                                ?
                                <Link to={`/updateEquipments/${_id}`}>
                                    <button className="btn btn-primary px-4 text-lg">Edit</button>
                                </Link>
                                :
                                <button onClick={handleEdit} className="btn btn-primary px-4 text-lg">Edit</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;