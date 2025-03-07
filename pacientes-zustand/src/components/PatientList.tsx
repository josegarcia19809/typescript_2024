import {usePatientStore} from "../store/store.ts";

function PatientList() {

    const patients = usePatientStore(state => state.patients);
    console.log(patients);

    return (
        <></>
    );
}

export default PatientList;