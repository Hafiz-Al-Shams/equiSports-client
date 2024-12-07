import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";



const ViewDetails = () => {

    const { equipmentId } = useParams();
    console.log(equipmentId);

    const equipment = useLoaderData();
    const { _id, name, category, description, price, rating, customization, deliveryTime, availableQuantity, photo, userName, userEmail } = equipment;


    return (
        <div>
            <Helmet>
                <title>SportsSphere | Details</title>
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl w-8/12 mx-auto mt-20">
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
                        <Link to={`/updateEquipments/${_id}`}>
                            <button className="btn btn-primary px-4 text-lg">Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;