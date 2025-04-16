import {useCryptoStore} from "../store.ts";
import {useMemo} from "react";
import Spinner from "./Spinner.tsx";


function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result);
    const loading = useCryptoStore((state) => state.loading);
    const hasResult = useMemo(() => !Object.values(result).includes(""), [result]);

    return (
        <div className="result-wrapper">
            {loading ? <Spinner/> : hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt={result.IMAGEURL}
                        />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas : <span>{result.CHANGEPCT24HOUR}</span>
                            </p>
                            <p>Últrima actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}

        </div>
    );
}

export default CryptoPriceDisplay;