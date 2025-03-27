import {countries} from "../../data/countries.ts";
import styles from "./Form.module.css";
import {ChangeEvent, useState} from "react";
import {SearchType} from "../../types/index.ts";


function Form() {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: '',
    });


    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        })
    };
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
                        value={search.city}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="country">Pais</label>
                    <select
                        id="country"
                        value={search.country}
                        onChange={handleChange}
                        name="country"
                    >
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