import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



const Home = () => {


    const equipments = useLoaderData();


    return (
        <div>
            <Helmet>
                <title>SportsSphere | Home</title>
            </Helmet>
            <h1 className="text-4xl text-center my-0">THIS is HOME</h1>





            <div className="mb-24">
                <AwesomeSlider>
                    <div><img className="w-full" src="https://i.ibb.co.com/HhK2Cz5/slider1.jpg" alt="" /></div>
                    <div><img className="w-full" src="https://i.ibb.co.com/cJCn0mF/slider2.jpg" alt="" /></div>
                    <div><img className="w-full" src="https://i.ibb.co.com/mCKMsH4/slider3.jpg" alt="" /></div>
                    <div><img className="w-full" src="https://i.ibb.co.com/0Zvw97q/slider4.jpg" alt="" /></div>
                </AwesomeSlider>
            </div>


            <div className="w-10/12 mx-auto">
                <h2 className="text-3xl font-semibold text-center mt-0 mb-4">Sports Categories</h2>
                <div className="flex gap-10">
                    <Link><button className="btn btn-lg btn-outline btn-primary text-lg font-bold">Cricket</button></Link>
                    <Link><button className="btn btn-lg btn-outline btn-primary text-lg font-bold">Badminton</button></Link>
                    <Link><button className="btn btn-lg btn-outline btn-primary text-lg font-bold">Tennis</button></Link>
                    <Link><button className="btn btn-lg btn-outline btn-primary text-lg font-bold">Football</button></Link>
                </div>
            </div>



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