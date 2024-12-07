import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";

import Details from '../Details.json'



const ViewDetails = () => {

    const { equipmentId } = useParams();
    console.log(equipmentId);

    const { user } = useContext(AuthContext);

    const equipment = useLoaderData();
    const { _id, name, category, description, price, rating, customization, deliveryTime, availableQuantity, photo, userName, userEmail } = equipment;


    const handleEdit = () => {
        Swal.fire({
            title: 'Invalid Authority',
            text: 'You can only Edit Equipment from your Own List',
            icon: 'error',
            confirmButtonText: 'understood'
        });
    }


    return (
        <div>
            <Helmet>
                <title>SportsSphere | Details</title>
            </Helmet>
            <div className="flex justify-center items-center gap-12 pt-6 pb-2">
                <div className="w-40"><Lottie animationData={Details}></Lottie></div>
                <h1 className="text-5xl font-bold">{`${name} Details`}</h1>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-8/12 mx-auto mt-1">
                <figure>
                    <img
                        src={photo}
                        className="w-[500px] p-10"
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Category: {category}</p>
                    <p>Price: {price}</p>
                    <p>Available in Stock: {availableQuantity}</p>
                    <p>Rating: {rating}</p>
                    <p>Description: {description}</p>
                    <p>Delivery Time needed: {deliveryTime}</p>
                    <p>Custom info: {customization}</p>
                    <p>This Equipment added by: {userName}</p>
                    <p>Email: {userEmail}</p>
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