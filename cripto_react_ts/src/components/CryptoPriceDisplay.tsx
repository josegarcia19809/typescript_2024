import {useCryptoStore} from "../store.ts";
import {useMemo} from "react";

function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result);
    const hasResult = useMemo(() => !Object.values(result).includes(""), [result]);

    return (
        <div>
            {hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <div>
                            <p>El precio es de : <span>{result.PRICE}</span></p>
                        </div>
                    </div>
                </>
            )}

        </div>
    );
}

export default CryptoPriceDisplay;