import {currencies} from "../data";
import {useCryptoStore} from "../store.ts";
import {ChangeEvent, useState} from "react";
import {Pair} from "../types";
import ErrorMessage from "./ErrorMessage.tsx";

function CriptoSearchForm() {

    const cryptocurrencies = useCryptoStore((state) => state.cryptoscurrencies);

    const [pair, setPair] = useState<Pair>({
        currency: "",
        criptocurrency: "",
    });

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(pair).includes("")) {
            setError("Todos los campos son obligatorios");
            return;
        }
        setError("")
    }

    const [error, setError] = useState('');

    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    id="currency"
                    name="currency"
                    onChange={handleChange}
                    value={pair.currency}>
                    <option value="">-- Seleccione --</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptocurrency">Criptomoneda:</label>
                <select
                    id="criptocurrency"
                    name="criptocurrency"
                    onChange={handleChange}
                    value={pair.criptocurrency}
                >
                    <option value="">-- Seleccione --</option>
                    {cryptocurrencies.map(crypto => (
                        <option
                            key={crypto.CoinInfo.FullName}
                            value={crypto.CoinInfo.Name}>
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Cotizar"/>
        </form>
    );
}

export default CriptoSearchForm;