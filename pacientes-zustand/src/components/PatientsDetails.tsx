import {Patient} from "../types";
import PatientDetailItem from "./PatientDetailItem.tsx";
import {usePatientStore} from "../store/store.ts";
import {toast} from "react-toastify";

type PatientsDetailsProps = {
    patient: Patient;
}

function PatientsDetails({patient}: PatientsDetailsProps) {

    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)

    const handleClick=()=>{
        deletePatient(patient.id);
        toast("Paciente eliminado", {
            type: "error",
        })
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="Id" data={patient.id}/>
            <PatientDetailItem label="Nombre" data={patient.name}/>
            <PatientDetailItem label="Propietario" data={patient.caretaker}/>
            <PatientDetailItem label="Email" data={patient.email}/>
            <PatientDetailItem label="Fecha alta" data={patient.date.toString()}/>
            <PatientDetailItem label="Sintomas" data={patient.symptoms}/>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white
                                font-bold uppercase rounded-lg"
                    onClick={() => {
                        getPatientById(patient.id)
                    }}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
                                uppercase rounded-lg"
                    onClick={handleClick}
                >
                    Eliminar
                </button>
            </div>
        </div>

    );
}

export default PatientsDetails;