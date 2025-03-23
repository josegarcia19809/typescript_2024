import {countries} from "../../data/countries.ts";

function Form() {
    return (
        <>
            <form>
                <div>
                    <label htmlFor="city">Ciudad</label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Ciudad"
                    />
                </div>

                <div>
                    <label>Pais</label>
                    <select>
                        <option value="">-- Seleccione un pais --</option>
                        {countries.map(country => (
                            <option
                                key={country.code}
                                value={country.code}
                            >{country.name}</option>
                        ))}
                    </select>

                </div>
                <input type="submit" value="Consultar Clima"/>
            </form>
        </>
    );
}

export default Form;