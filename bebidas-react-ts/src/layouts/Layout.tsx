import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";
import Modal from "../components/Modal.tsx";
import {useAppStore} from "../stores/useAppStore.ts";
import {useEffect} from "react";

function Layout() {

    const loadFromLocalStorage = useAppStore((state) => state.loadFromLocalStorage);
    useEffect(() => {
        loadFromLocalStorage()
    }, []);
    return (
        <>
            <Header/>
            <main className="container mx-auto py-16">
                <Outlet/>
            </main>
            <Modal/>
        </>
    );
}

export default Layout;