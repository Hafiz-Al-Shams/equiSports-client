import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
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


    const categories = [
        { id: 1, category: 'Cricket' },
        { id: 2, category: 'Badminton' },
        { id: 3, category: 'Tennis' },
        { id: 4, category: 'Football' },
        { id: 5, category: 'Basketball' },
        { id: 6, category: 'Swimming' },
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

            <div className="flex flex-col lg:flex-row justify-between items-center w-11/12 mx-auto pt-12 pb-16">
                <div className="w-40">
                    <Lottie animationData={DynamicHome}></Lottie>
                </div>
                <div className="w-9/12 mx-auto space-y-5">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold text-center">SportsSphere - Elite Sports Shop</h1>
                    <p className="text-center text-lg font-semibold">Where passion for sports meets impeccable craftsmanship. Your ultimate destination for premium sports equipments. Our store features an array of high-performance equipments designed for champions. We offer an extensive collection tailored for athletes and fitness enthusiasts, combining style, durability, and performance. Explore a wide range of cutting-edge sports equipments crafted to elevate your game. From professionals to casual enthusiasts, our collection caters to every need with unmatched quality and comfort. Find your stride that empowers you to excel in every sport category.</p>
                </div>
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



            {/* carousel from daisyui */}
            <div className="carousel w-full h-[85vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/HhK2Cz5/slider1.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/0Zvw97q/slider4.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/mCKMsH4/slider3.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/cJCn0mF/slider2.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>



            <div className="w-10/12 mx-auto">
                <h2 className="text-5xl font-semibold text-center mt-12 mb-10">Sports Categories</h2>
                <div className="flex flex-col lg:flex-row gap-10 w-10/12 mx-auto mb-24">
                    {
                        categories.map(category => (
                            <Link key={category.id} to={`/equipments/category/${category.category}`}><button className="btn btn-lg btn-outline btn-secondary text-xl font-bold">{category.category}</button></Link>
                        ))
                    }
                </div>
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-24 w-11/12 mx-auto mb-10">
                {
                    equipments.map(equipment => (
                        <div key={equipment._id} className="card card-compact bg-base-200/60 w-96 shadow-xl p-3">
                            <figure>
                                <img
                                    className="h-52 p-1.5"
                                    src={equipment.photo}
                                    alt="" />
                            </figure>
                            <div className="card-body text-black">
                                <h2 className="card-title text-2xl">{equipment.name}</h2>
                                <p className="font-semibold text-gray-800 text-lg">Price: {equipment.price}</p>
                                <p className="font-semibold text-gray-800 text-lg">Available Quantity: {equipment.availableQuantity}</p>
                                <p className="font-semibold text-gray-800 text-lg">Description: {equipment.description}</p>
                                <div className="card-actions justify-end pt-2">
                                    <Link to={`/equipments/${equipment._id}`}>
                                        <button className="btn btn-primary font-bold">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

            <div className="text-center mb-24">
                <Link to="/allEquipments">
                    <button className="btn btn-secondary btn-lg font-semibold">View All</button>
                </Link>
            </div>


            {/* reviews section */}
            <section className="bg-blue-100 py-20 mb-28">
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
            <section className="bg-gray-100 py-10 mb-28">
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
                            <div className="flex flex-col md:flex-row items-center">
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