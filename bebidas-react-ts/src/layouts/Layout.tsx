import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";
import Modal from "../components/Modal.tsx";

function Layout() {
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