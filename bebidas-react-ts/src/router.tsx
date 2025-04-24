import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./views/IndexPage.tsx";
import FavoritePage from "./views/FavoritePage.tsx";
import Layout from "./layouts/Layout.tsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<IndexPage/>} index/>
                    <Route path="/favoritos" element={<FavoritePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;