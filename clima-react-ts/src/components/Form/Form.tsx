import {countries} from "../../data/countries.ts";
import styles from "./Form.module.css";

function Form() {
    return (
        <>
            <form className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="city">Ciudad</label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Ciudad"
                    />
                </div>

                <div className={styles.field}>
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
                <input className={styles.submit} type="submit"
                       value="Consultar Clima"/>
            </form>
        </>
    );
}

export default Form;