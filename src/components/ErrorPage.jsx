import { Helmet } from "react-helmet-async";



const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>ERROR</title>
            </Helmet>
            error happened
        </div>
    );
};

export default ErrorPage;