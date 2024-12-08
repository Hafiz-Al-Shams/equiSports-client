import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import EquiptCard from "./EquiptCard";
import { useState } from "react";
import Lottie from "lottie-react";

import MyList from '../MyList.json'



const MyEquipts = () => {

    const loadedEquipments = useLoaderData();

    const [equipments, setEquipments] = useState(loadedEquipments);


    return (
        <div className="mx-20">
            <Helmet>
                <title>SportsSphere | My List</title>
            </Helmet>
            <div className="flex justify-center items-center gap-4 pt-6 pb-8">
                <div className="w-40"><Lottie animationData={MyList}></Lottie></div>
                <h1 className="mt-11 mb-8 text-4xl font-semibold">{`My Equipment List: ${equipments.length}`}</h1>
            </div>

            {
                equipments.length == 0 ? <div className="">
                    <h2 className="text-5xl font-bold text-red-500 text-center mb-8">No Equipment Detected!!</h2>
                    <p className="text-3xl font-semibold text-center">{`Looks like You haven't added any Equipment yet, time to load up!`}</p>
                </div>
                    :
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-24 mb-28">
                        {
                            equipments.map(equipment => <EquiptCard
                                key={equipment._id}
                                equipment={equipment}
                                equipments={equipments}
                                setEquipments={setEquipments}
                            ></EquiptCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default MyEquipts;