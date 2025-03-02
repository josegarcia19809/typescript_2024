import PatientForm from "./components/PatientForm.tsx";
import PatientList from "./components/PatientList.tsx";

function App() {
    return (
        <>
            <div className="container mx-auto mt-10">
                <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
                    Seguimiento de pacientes {''}
                    <span className="text-indigo-700">Veterinaria</span>
                </h1>

                <div className="mt-12 md:flex">
                    <PatientForm/>
                    <PatientList/>
                </div>
            </div>
        </>
    );
}

export default App;