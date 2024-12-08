import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";



const CategoryData = () => {

    const { category } = useParams();
    // console.log(category);

    const equipments = useLoaderData();


    return (
        <div className="w-10/12 mx-auto">
            <Helmet>
                <title>SportsSphere | {category}</title>
            </Helmet>
            <h2 className="text-4xl font-semibold text-center my-10">{`${category}: ${equipments.length}`}</h2>

            <div className="grid grid-cols-3 gap-y-24 mb-16">
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
                                        <button className="btn">Details</button>
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