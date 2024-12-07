import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import EquiptCard from "./EquiptCard";
import { useState } from "react";



const MyEquipts = () => {

    const loadedEquipments = useLoaderData();

    const [equipments, setEquipments] = useState(loadedEquipments);


    return (
        <div className="m-20">
            <Helmet>
                <title>SportsSphere | My List</title>
            </Helmet>
            <h1 className="text-2xl text-center font-semibold mb-8">My Equipment List: {equipments.length}</h1>

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