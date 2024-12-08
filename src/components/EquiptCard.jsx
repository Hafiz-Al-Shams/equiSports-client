import { Link } from "react-router-dom";
import Swal from "sweetalert2";



// eslint-disable-next-line react/prop-types
const EquiptCard = ({ equipment, equipments, setEquipments }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, name, description, price, availableQuantity, photo } = equipment;



    const handleDelete = _id => {
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
                // console.log('delete confirmed');

                fetch(`https://equi-sports-server.vercel.app/equipments/${_id}`, {
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
        <div className="card card-compact bg-base-200/60 w-96 shadow-xl p-3">
            <figure>
                <img
                    className="h-52 p-1"
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className="font-semibold text-lg text-gray-700">Price: {price}</p>
                <p className="font-semibold text-lg text-gray-700">Available Quantity: {availableQuantity}</p>
                <p className="font-semibold text-lg text-gray-700">Description: {description}</p>
                <div className="card-actions justify-end pt-3">
                    <div className="join join-vertical lg:join-horizontal gap-4">
                        <Link to={`/equipments/${_id}`}>
                            <button className="btn join-item font-bold bg-blue-200/70">Details</button>
                        </Link>
                        <Link to={`/updateEquipments/${_id}`}>
                            <button className="btn join-item font-bold bg-blue-200/70">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-400 font-bold">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquiptCard;