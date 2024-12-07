import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";



const Home = () => {


    const equipments = useLoaderData();


    return (
        <div>
            <Helmet>
                <title>SportsSphere | Home</title>
            </Helmet>
            <h1 className="text-4xl text-center my-12">THIS is HOME</h1>

            <div className="grid grid-cols-3 gap-y-24 w-9/12 mx-auto">
                {
                    equipments.map(equipment => (
                        <div key={equipment._id} className="card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    className="h-52"
                                    src={equipment.photo}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {name}</h2>
                                <p>Price: {equipment.price}</p>
                                <p>Available Quantity: {equipment.availableQuantity}</p>
                                <p>Description: {equipment.description}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/equipments/${equipment._id}`}>
                                        <button className="btn btn-primary">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

            <div>
                <Link to="/allEquipments">
                    <button className="btn btn-secondary btn-lg">View All</button>
                </Link>
            </div>




        </div>
    );
};

export default Home;