import {Patient} from "../types";
import PatientDetailItem from "./PatientDetailItem.tsx";

type PatientsDetailsProps = {
    patient: Patient;
}

function PatientsDetails({patient}: PatientsDetailsProps) {
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="Id" data={patient.id}/>
            <PatientDetailItem label="Nombre" data={patient.name}/>
            <PatientDetailItem label="Propietario" data={patient.caretaker}/>
            <PatientDetailItem label="Email" data={patient.email}/>
            <PatientDetailItem label="Fecha alta" data={patient.date.toString()}/>
            <PatientDetailItem label="Sintomas" data={patient.symptoms}/>
        </div>
    );
}

export default PatientsDetails;