import {usePatientStore} from "../store/store.ts";
import PatientsDetails from "./PatientsDetails.tsx";

function PatientList() {

    const patients = usePatientStore(state => state.patients);
    console.log(patients);

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado de pacientes
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">
                            pacientes y citas</span>
                        {patients.map((patient) => (
                            <PatientsDetails
                                key={patient.id}
                                patient={patient}
                            />
                        ))}
                    </p>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                        No hay pacientes
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregado pacientes {''}
                        <span className="text-indigo-600 font-bold">
                            y apareceran en este lugar</span>
                    </p>
                </>
            )}
        </div>
    );
}

export default PatientList;