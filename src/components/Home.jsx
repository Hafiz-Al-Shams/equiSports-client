import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useState } from "react";
import Lottie from "lottie-react";

import DynamicHome from '../DynamicHome.json'




const Home = () => {


    const equipments = useLoaderData();



    const reviews = [
        {
            id: 1,
            name: "Jane Smith",
            image: "https://i.pravatar.cc/100?img=1",
            review:
                "The quality of the products is top-notch! I found everything I needed for my cricket gear here.",
            rating: 5,
        },
        {
            id: 2,
            name: "John Doe",
            image: "https://i.ibb.co.com/87XQTzd/review24.jpg",
            review:
                "Fast delivery and amazing customer service. Highly recommend this store for all sports enthusiasts.",
            rating: 4,
        },
        {
            id: 3,
            name: "David Johnson",
            image: "https://i.pravatar.cc/100?img=3",
            review:
                "Great variety of products! Found the perfect running shoes for my marathon training.",
            rating: 5,
        },
    ];


    // toggling dark-light theme
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };



    return (
        <div className={`${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}>
            <Helmet>
                <title>SportsSphere | Home</title>
            </Helmet>




            <div className="flex justify-between items-center w-11/12 mx-auto pt-0 pb-10">
                <div className="w-40">
                    <Lottie animationData={DynamicHome}></Lottie>
                </div>
                <h1 className="text-6xl font-semibold text-center">SportsSphere - Elite Sports Shop</h1>
                {/* mode changing section */}
                <div className="text-right">
                    <h1 className="text-lg font-semibold mb-1">
                        {isDark ? "Dark Mode" : "Light Mode"}
                    </h1>
                    <button
                        onClick={toggleTheme}
                        className="btn btn-primary btn-sm"
                    >
                        Toggle {isDark ? "Light" : "Dark"}
                    </button>
                </div>
            </div>




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
                            <div className="card-body text-black">
                                <h2 className="card-title">Name: {equipment.name}</h2>
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


            {/* reviews section */}
            <section className="bg-blue-100 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                        What Our Customers Say
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
                            >
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-20 h-20 rounded-full border-4 border-blue-500"
                                />
                                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                                    {review.name}
                                </h3>
                                <p className="mt-2 text-gray-600">{review.review}</p>
                                <div className="mt-4 rating">
                                    <input
                                        type="radio"
                                        name={`rating-${review.id}`}
                                        className="mask mask-star bg-yellow-400"
                                        disabled
                                        checked={review.rating >= 1}
                                    />
                                    <input
                                        type="radio"
                                        name={`rating-${review.id}`}
                                        className="mask mask-star bg-yellow-400"
                                        disabled
                                        checked={review.rating >= 2}
                                    />
                                    <input
                                        type="radio"
                                        name={`rating-${review.id}`}
                                        className="mask mask-star bg-yellow-400"
                                        disabled
                                        checked={review.rating >= 3}
                                    />
                                    <input
                                        type="radio"
                                        name={`rating-${review.id}`}
                                        className="mask mask-star bg-yellow-400"
                                        disabled
                                        checked={review.rating >= 4}
                                    />
                                    <input
                                        type="radio"
                                        name={`rating-${review.id}`}
                                        className="mask mask-star bg-yellow-400"
                                        disabled
                                        checked={review.rating >= 5}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* newsletter section */}
            <section className="bg-gray-100 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Stay updated on the latest sports gear, exclusive offers, and discounts!
                        </p>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <div className="w-full max-w-md">
                            <div className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-r-lg font-medium transition duration-300"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 text-center">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </section>




        </div>
    );
};

export default Home;