import { Helmet } from "react-helmet-async";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SportsSphere | Home</title>
            </Helmet>
            <h1 className="text-4xl text-center my-12">THIS is HOME</h1>
        </div>
    );
};

export default Home;