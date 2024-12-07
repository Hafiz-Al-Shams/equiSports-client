import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";



const AllEquipts = () => {

    const equipments = useLoaderData();








    return (
        <div className="my-5 mx-auto max-w-4xl text-center">
            <Helmet>
                <title>SportsSphere | All Equipments</title>
            </Helmet>
            <h2 className="mt-11 mb-8 text-4xl font-semibold">All Equipment List: {equipments.length}</h2>
            <table className="sports-table mb-20 mx-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price ($)</th>
                        <th>Available Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {equipments.map((equipment, index) => (
                        <tr key={equipment._id} className="sports-table-row">
                            <td>{index + 1}</td>
                            <td>{equipment.name}</td>
                            <td>{equipment.category}</td>
                            <td>{equipment.price}</td>
                            <td>{equipment.availableQuantity}</td>
                            <td>
                                <Link to={`/equipments/${equipment._id}`}>
                                    <button className="btn btn-primary">View Details</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllEquipts;