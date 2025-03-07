import {Patient} from "../types";

type PatientsDetailsProps = {
    patient: Patient;
}

function PatientsDetails({patient}: PatientsDetailsProps) {
    return (
        <p>{patient.name}</p>
    );
}

export default PatientsDetails;