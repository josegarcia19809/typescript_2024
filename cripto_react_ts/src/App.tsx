import CriptoSearchForm from "./components/CriptoSearchForm.tsx";
import {useCryptoStore} from "./store.ts";
import {useEffect} from "react";

function App() {

    const fetchCryptos = useCryptoStore((state)=>state.fetchCryptos);

    useEffect(() => {
        fetchCryptos();
    }, []);

    return (
        <>
            <div className="container">
                <h1 className="app-title">
                    Cotizador de <span>Criptomonedas</span>
                </h1>

                <div className="content">
                    <CriptoSearchForm/>
                </div>
            </div>
        </>
    );
}

export default App;