import { Link } from "react-router-dom";
import Swal from "sweetalert2";



// eslint-disable-next-line react/prop-types
const EquiptCard = ({ equipment, equipments, setEquipments }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, name, category, description, price, rating, customization, deliveryTime, availableQuantity, photo, userName, userEmail } = equipment;



    const handleDelete = _id => {

        console.log(_id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete confirmed');

                fetch(`http://localhost:5000/equipments/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your equipment has been deleted.",
                                icon: "success"
                            });

                            // eslint-disable-next-line react/prop-types
                            const remainingEquipments = equipments.filter(equipment => equipment._id !== _id);
                            setEquipments(remainingEquipments);

                        }
                    })

            }
        });
    }


    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    className="h-52"
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Price: {price}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-end">
                    <div className="join join-vertical lg:join-horizontal gap-4">
                        <button className="btn join-item">View</button>
                        <Link to={`/updateEquipments/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-400">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquiptCard;