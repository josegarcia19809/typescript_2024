import {NavLink, useLocation} from "react-router-dom";
import {ChangeEvent, FormEvent, useEffect, useMemo, useState} from "react";
import {useAppStore} from "../stores/useAppStore.ts";

function Header() {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })
    const {pathname} = useLocation();
    const isHome = useMemo(() => pathname === '/', [pathname]);

    const fetchCategories = useAppStore(state => state.fetchCategories);
    const categories = useAppStore(state => state.categories);
    const searchRecipes = useAppStore(state => state.searchRecipes);
    const showNotification = useAppStore(state => state.showNotification);

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Validar
        if (Object.values(searchFilters).some(value => value === '')) {
            showNotification({
                text: "Todos los campos son obligatorios",
                error: true
            })
            return;
        }

        // Consultar las recetas
        searchRecipes(searchFilters);
    }

    return (
        <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-gray-900'}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="/logo.svg" alt="Logo" className="w-32"/>
                    </div>

                    <nav className="flex gap-4">
                        <NavLink to="/" className={
                            ({isActive}) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                        }>Inicio</NavLink>
                        <NavLink to="/favoritos" className={
                            ({isActive}) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                        }>Favoritos</NavLink>
                    </nav>
                </div>

                {isHome && (
                    <form
                        className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="space-y-4">
                            <label htmlFor="ingredient"
                                   className="block text-white uppercase font-extrabold text-lg">Nombre
                                o ingredientes</label>
                            <input
                                id="ingredient"
                                type="text"
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o ingrediente. Ejemplo: Vodka, Tequila, Café"
                                value={searchFilters.ingredient}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-4">
                            <label htmlFor="category"
                                   className="block text-white uppercase font-extrabold text-lg">Categorías</label>
                            <select
                                id="category"
                                name="category"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                value={searchFilters.category}
                                onChange={handleChange}
                            >
                                <option value="">-- Seleccione --</option>
                                {categories.drinks.map(category => (
                                    <option key={category.strCategory}
                                            value={category.strCategory}>{category.strCategory}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" value="Buscar recetas"
                               className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                        />
                    </form>
                )}
            </div>
        </header>
    );
}

export default Header;