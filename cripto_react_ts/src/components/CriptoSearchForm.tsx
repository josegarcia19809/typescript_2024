import {currencies} from "../data";
import {useCryptoStore} from "../store.ts";
import {ChangeEvent, useState} from "react";
import {Pair} from "../types";

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

    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    id="currency"
                    name="currency"
                    onChange={handleChange}>
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
                    onChange={handleChange}>
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