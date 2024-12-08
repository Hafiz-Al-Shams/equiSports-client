import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";



const CategoryData = () => {

    const { category } = useParams();
    const equipments = useLoaderData();

    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>SportsSphere | {category}</title>
            </Helmet>
            <h2 className="text-4xl font-semibold text-center mb-10 mt-14">{`CATEGORY: ${category}(${equipments.length})`}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-24 mb-28">
                {
                    equipments.map(equipment => (
                        <div key={equipment._id} className="card card-compact bg-base-200/50 p-3.5 w-96 shadow-xl">
                            <figure>
                                <img
                                    className="h-52 p-1.5"
                                    src={equipment.photo}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">{equipment.name}</h2>
                                <p className="font-semibold text-lg text-gray-700">Price: {equipment.price}</p>
                                <p className="font-semibold text-lg text-gray-700">Available Quantity: {equipment.availableQuantity}</p>
                                <p className="font-semibold text-lg text-gray-700">Description: {equipment.description}</p>
                                <div className="card-actions justify-end mt-2">
                                    <Link to={`/equipments/${equipment._id}`}>
                                        <button className="btn btn-primary px-4 text-lg">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryData;