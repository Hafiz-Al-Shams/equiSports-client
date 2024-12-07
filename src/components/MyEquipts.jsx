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
                equipments.length == 0 ? <h2>u have added no equipment</h2>
                    :
                    <div className="grid grid-cols-3 gap-y-24">
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

            {/* <div className="grid grid-cols-3 gap-y-24">
                {
                    equipments.map(equipment => <EquiptCard
                        key={equipment._id}
                        equipment={equipment}
                        equipments={equipments}
                        setEquipments={setEquipments}
                    ></EquiptCard>)
                }
            </div> */}
        </div>
    );
};

export default MyEquipts;